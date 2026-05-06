import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';

dotenv.config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})