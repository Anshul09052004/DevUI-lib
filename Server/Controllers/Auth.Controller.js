import User from "../Models/Auth.Model.js";
import { generateToken } from "../Utils/token.js";

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body ;
        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email });

        }
        let token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({ user });


    } catch (error) {
        console.error("Error in Google Auth:", error);
        console.error("Request Body:", req.body);
        return res.status(500).json({ message: "Internal Server Error" });

    }
}
export const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({ message: "Logout successful" });
}


