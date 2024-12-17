import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUserProfile, followUnfollowUser, getSuggestedUser, updateUserProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:userName", protectRoute, getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUser);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateUserProfile);


export default router;