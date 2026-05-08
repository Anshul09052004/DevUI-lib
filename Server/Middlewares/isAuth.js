import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
    try {
        let { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        let verifyedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyedToken) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.userId = verifyedToken.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });

    }
}
export default isAuth;