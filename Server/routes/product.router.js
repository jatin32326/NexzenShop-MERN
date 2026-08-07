import { Router } from "express";
import {auth} from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import { ThirdLevelCatId, ThirdLevelCatName, createProduct, deleteProduct, getAllProducts, getAllProductsByCatId, getAllProductsByCatName, getAllProductsByPrice, getAllProductsByRating, getAllProductsBySubCatId, getAllProductsBySubCatName, getAllfeaturedProducts, getProduct, getProductsCount, removeImageFromCloudinary, updateProduct, uploadImages } from "../controller/product.controller.js";

const productRouter = Router()

productRouter.post("/uploadImages",auth,upload.array('images'),uploadImages)
productRouter.post("/create",auth,createProduct)
productRouter.get("/getAllproducts",getAllProducts)
productRouter.get("/getAllproductsByCatId/:id",getAllProductsByCatId)
productRouter.get("/getAllProductsBycatName",getAllProductsByCatName)
productRouter.get("/getAllProductsBySubCatId/:id",getAllProductsBySubCatId)
productRouter.get("/getAllProductsBySubcatName",getAllProductsBySubCatName)
productRouter.get("/getAllProductsByThirdLevelCatId/:id",ThirdLevelCatId)
productRouter.get("/getAllProductsByThirdLevelcatName",ThirdLevelCatName)
productRouter.get("/getAllproductsByPrice",getAllProductsByPrice)
productRouter.get("/getAllproductsByRating",getAllProductsByRating)
productRouter.get("/getAllproductsCount",getProductsCount)
productRouter.get("/getAllfeaturedProducts",getAllfeaturedProducts)
productRouter.delete("/:id",deleteProduct)
productRouter.get("/:id",getProduct)
productRouter.delete("deleteImage",auth,removeImageFromCloudinary)
productRouter.put("/updateProduct/:id",auth,updateProduct)

export default productRouter;