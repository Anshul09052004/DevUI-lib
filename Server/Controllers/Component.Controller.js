import User from '../Models/Auth.Model.js';
import Component from '../Models/Component.Model.js';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
export const saveComponent = async (req, res) => {

    try {

        const { name, code, props } = req.body;

        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        let existing;

        // Admin check public component
        if (user.role === 'admin') {

            existing = await Component.findOne({
                name,
                visibility: 'public'
            });

        } else {

            existing = await Component.findOne({
                name,
                owner: req.userId
            });

        }

        if (existing) {
            return res.status(400).json({
                message: 'Component with this name already exists'
            });
        }

        const component = await Component.create({
            name,
            code,
            props,
            owner: req.userId
        });

        return res.status(200).json({
            component
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: 'Server error'
        });

    }

};

export const PublishComponent = async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user || user.role !== 'admin') {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        const { componentId } = req.body;
        const component = await Component.findById(componentId);
        if (component.owner.toString() !== req.userId) {
            return res.status(403).json({
                message: 'you can not publish this component'
            });
        }
        const libPath = path.join(process.cwd(), '../devUI-lib');
        const componentDir = path.join(libPath, " src/components", component.name);
        const componentFile = path.join(componentDir, `${component.name}.jsx`);
        const indexFile = path.join(libPath, 'src/index.js');
        if (!fs.existsSync(componentDir)) {
            fs.mkdirSync(componentDir, { recursive: true });
        }
        fs.writeFileSync(componentFile, component.code);
        let indexContent = fs.readFileSync(indexFile, 'utf-8');
        const exportLine =
            `export {${component.name}} from './components/${component.name}/${component.name}.jsx';`;
        if (!indexContent.includes(exportLine)) {
            fs.appendFileSync(indexFile, `\n${exportLine}`);
        }
        console.log('clean old build');
        const distPath = path.join(libPath, 'dist');
        if (fs.existsSync(distPath)) {
            fs.rmSync(distPath, { recursive: true, force: true });
        }
        console.log('start build');
        execSync('npm run build', { cwd: libPath, stdio: 'inherit' });

        console.log('Updating version');
        execSync('npm version patch --no-git-tag-version', { cwd: libPath, stdio: 'inherit' });

        console.log('Publishing to npm');
        execSync('npm publish --access public', { cwd: libPath, stdio: 'inherit' });

        component.visibility = 'public';
        component.npmPackage = "devui-lib";
        await component.save();
        return res.status(200).json({
            message: 'Component published successfully'
        });
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: 'Server error'
        });

    }
}