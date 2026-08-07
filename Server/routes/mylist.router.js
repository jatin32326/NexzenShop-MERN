
import { auth } from "../middlewares/auth.js";
import { Router } from "express";
import { addToMyListController, deleteMyListController, getMyListController } from "../controller/mylist.controller.js";

const MyListRouter = Router()

MyListRouter.post("/add",auth,addToMyListController)
MyListRouter.get("/",auth,getMyListController)
MyListRouter.delete("/remove/:id",auth,deleteMyListController)

export default MyListRouter;