import User from "../models/user.js";

export const getAllUsers = async (req,res) => {
  try {
    const users = await User.find({}, "name email avatar expoPushToken streak longestStreak"
    );

    res.json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};