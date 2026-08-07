import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { addToCartController, deleteCartItemController, getCartItemController, updateCartitmeController } from "../controller/cart.controller.js";

const cartRouter = Router();

cartRouter.post("/add",auth,addToCartController)
cartRouter.get("/get",auth,getCartItemController)
cartRouter.put("/update-qty",auth,updateCartitmeController)
cartRouter.delete("/delete-cart-item",auth,deleteCartItemController)

export default cartRouter;