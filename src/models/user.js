import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      unique: true,
      required: true,
    },

    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    avatar: String,

    expoPushToken: {
      type: String,
      // required: true,
    },

    completedToday: {
      type: Boolean,
      default: false,
    },
    streak: {
      type: Number,
      default: 0,
    },

    longestStreak: {
      type: Number,
      default: 0,
    },

  lastActiveDate: Date,

  notificationsEnabled: {
    type: Boolean,
    default: true,
  },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model( "User", userSchema);