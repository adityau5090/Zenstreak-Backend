import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const googleLogin = async (req, res) => {
  try {
    const {googleId, name, email, avatar, expoPushToken} = req.body;

    let user = await User.findOne({email});

    if (!user) {
      user = await User.create({
        googleId,
        name,
        email,
        avatar,
        expoPushToken,
      });
    } else {
      user.name = name;
      user.avatar = avatar;
      user.expoPushToken = expoPushToken;
      user.lastActiveDate = new Date();

      await user.save();
    }

    const token = jwt.sign(
      {id: user._id}, 
      process.env.JWT_SECRET,
      {expiresIn: "30d",}
    );

    return res.json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};