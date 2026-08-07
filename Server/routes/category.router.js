import { Router } from  "express";
import { auth } from  "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import {createCategory, deleteCategory, getCategories, getCategoriesCount, getSingleCategory, getSubCategoriesCount, removeImageFromCloudinary, updatedCategory, uploadImages} from "../controller/category.controller.js";

const categoryRouter=Router()

categoryRouter.post("/uploadImages",auth,upload.array('images'),uploadImages)
categoryRouter.post("/create",auth,createCategory)
categoryRouter.get("/get",getCategories)
categoryRouter.get("/get/count",getCategoriesCount)
categoryRouter.get("/get/count/subcat",getSubCategoriesCount)
categoryRouter.get("/:id",getSingleCategory)
categoryRouter.delete("/deleteImage",auth,removeImageFromCloudinary)
categoryRouter.delete("/:id",auth,deleteCategory)
categoryRouter.put("/:id",auth,updatedCategory)

export default categoryRouter;