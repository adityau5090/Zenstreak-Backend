import { Router } from "express";
import { sendBroadcastNotification, sendUserNotification } from "../controllers/admin.controller.js";
import { verifyAdmin } from "../middleware/admin.middleware.js";
import { protect } from "../middleware/auth.middleware.js";


const router = Router();

router.post("/sendBroadcastNotification",protect,sendBroadcastNotification);
router.post("/sendUserNotification",protect, sendUserNotification);

export default router;