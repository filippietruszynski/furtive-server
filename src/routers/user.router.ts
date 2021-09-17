import { Router } from "express";

import { updateUser, user } from "../controllers/user.controllers";

const router = Router();

router.get("/", user);
router.put("/", updateUser);

export default router;
