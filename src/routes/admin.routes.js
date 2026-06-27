import { Router } from "express";
import { sendBroadcastNotification, sendUserNotification } from "../controllers/admin.controller.js";
import { verifyAdmin } from "../middleware/admin.middleware.js";
import { protect } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controllers/user.controller.js";


const router = Router();

router.post("/sendBroadcastNotification",protect,sendBroadcastNotification);
router.post("/sendUserNotification",protect, sendUserNotification);
router.post("/users",protect, getAllUsers)

export default router;