import express from "express";
import { protectRoutes } from "../middleware/auth.js";
import {
  getMessages,
  getUserForSidebar,
  markMessageAsSeen,
  sendMessage,
} from "../controller/messageController.js";

const messageRouter = express.Router();

messageRouter.get("/users", protectRoutes, getUserForSidebar);
messageRouter.get("/:id", protectRoutes, getMessages);
messageRouter.put("/mark/:id", protectRoutes, markMessageAsSeen);
messageRouter.post("/send/:id", protectRoutes, sendMessage);

export default messageRouter;
