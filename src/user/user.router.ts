import { Router } from "express";

import { updateUser, user } from "./user.controllers";

const router = Router();

router.get("/", user);
router.put("/", updateUser);

export default router;
