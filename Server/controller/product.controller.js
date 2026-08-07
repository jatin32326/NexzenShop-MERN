import ProductModel from "../models/product.model.js";

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_Secret,
    secure: true,
})

// image upload
var imageArr = [];
export const uploadImages = async (req, res) => {
    try {
        imageArr=[]

        const image = req.files;

        const options = {
                use_filename: true, 
                unique_filename: false,
                overwrite: false
        }
            for (let i = 0; i < image?.length; i++) {

                const img = await cloudinary.uploader.upload(
                    image[i].path,
                    options,
                    function (error, result) {
                        imageArr.push(result.secure_url);
                        fs.unlinkSync(`uploads/${req.files[i].filename}`);
                    }
                );
            }

            return res.status(200).json({
                images: imageArr[0]
            });

    }
    catch (error) {
        return res.status(500).json({
            error: error.message || error,
            success: false,
            error: true
        });
    }

};

// create product 
export async function createProduct(req,res){
    try{
         let product = new ProductModel({
            name:req.body.name,
            description:req.body.description,
            images:imageArr,
            brand:req.body.brand,
            price:req.body.price,
            oldprice:req.body.oldprice,
            catName:req.body.catName,
            catId:req.body.catId,
            subCatId:req.body. subCatId,
            subCat:req.body.subCat,
            subCatName:req.body.subCatName,
            thirdsubCat:req.body.thirdsubCat,
            thirdsubCatName:req.body.thirdsubCatName,
            thirdsubCatId:req.body.thirdsubCatId,
            countInStock:req.body. countInStock,
            rating:req.body.rating,
            discount:req.body.discount,
            productRam:req.body. productRam,
            size:req.body.size,
            productWeight:req.body.productWeight,

        });

        product = await product.save()

        if(!product){
            return res.stauts(500).json({
                message:'product not created',
                error:true,
                success:false
            });
        }
        imageArr=[];
        res.status(200).json({
            message:"product created successfully",
            error:false,
            success:true
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })

    }
}

// get all products
export async function getAllProducts(req,res){
    try{
        const page = parseInt(req.query.page)|| 1;
        const perPage = parseInt(req.query.perPage);
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts/perPage);

        if(page > totalPages){
            return res.send(404).json({message:"page not found",success:false,error:true})
        }


        const products = await ProductModel.find().populate('category')
        .skip((page-1)*perPage)
        .limit(perPage).exec();

        if(!products){
            res.status(500).json({
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            products:products,
            totalPages:totalPages,
            page:page
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

//get all products By Category id

export async function getAllProductsByCatId(req,res){
    try{
        const page = parseInt(req.query.page)|| 1;
        const perPage = parseInt(req.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts/perPage);

        if(page > totalPages){
            return res.send(404).json({message:"page not found",success:false,error:true})
        }


        const products = await ProductModel.find({
            catId:req.params.id
        }).populate('category')
        .skip((page-1)*perPage)
        .limit(perPage).exec();

        if(!products){
            res.status(500).json({
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            products:products,
            totalPages:totalPages,
            page:page
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

// Get products By Cateogory Name
export async function getAllProductsByCatName(req,res){
    try{
        const page = parseInt(req.query.page)|| 1;
        const perPage = parseInt(req.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts/perPage);

        if(page > totalPages){
            return res.send(404).json({message:"page not found",success:false,error:true})
        }


        const products = await ProductModel.find({
            catName:req.query.catName
        }).populate('category')
        .skip((page-1)*perPage)
        .limit(perPage).exec();

        if(!products){
            res.status(500).json({
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            products:products,
            totalPages:totalPages,
            page:page
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

// Get products By sub category id
export async function getAllProductsBySubCatId(req,res){
    try{
        const page = parseInt(req.query.page)|| 1;
        const perPage = parseInt(req.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts/perPage);

        if(page > totalPages){
            return res.send(404).json({message:"page not found",success:false,error:true})
        }


        const products = await ProductModel.find({
            subCatId:req.params.id
        }).populate('category')
        .skip((page-1)*perPage)
        .limit(perPage).exec();

        if(!products){
            res.status(500).json({
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            products:products,
            totalPages:totalPages,
            page:page
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}
// Get products By sub Category Name
export async function getAllProductsBySubCatName(req,res){
    try{
        const page = parseInt(req.query.page)|| 1;
        const perPage = parseInt(req.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts/perPage);

        if(page > totalPages){
            return res.send(404).json({message:"page not found",success:false,error:true})
        }


        const products = await ProductModel.find({
            subCat:req.query.subCat
        }).populate('category')
        .skip((page-1)*perPage)
        .limit(perPage).exec();

        if(!products){
            res.status(500).json({
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            products:products,
            totalPages:totalPages,
            page:page
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

// get products by third level catetgory 
export async function ThirdLevelCatId(req,res){
    try{
        const page = parseInt(req.query.page)|| 1;
        const perPage = parseInt(req.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts/perPage);

        if(page > totalPages){
            return res.status(404).json({message:"page not found",success:false,error:true})
        }


        const products = await ProductModel.find({
            thirdsubCatId:req.params.id

        }).populate('category')
        .skip((page-1)*perPage)
        .limit(perPage).exec();

        if(!products){
            res.status(500).json({
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            products:products,
            totalPages:totalPages,
            page:page
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}
// Get products by third level Category Name
export async function ThirdLevelCatName(req,res){
    try{
        const page = parseInt(req.query.page)|| 1;
        const perPage = parseInt(req.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts/perPage);

        if(page > totalPages){
            return res.status(404).json({message:"page not found",success:false,error:true})
        }


        const products = await ProductModel.find({
            thirdsubCat:req.query.thirdsubCat
        }).populate('category')
        .skip((page-1)*perPage)
        .limit(perPage).exec();

        if(!products){
            res.status(500).json({
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            products:products,
            totalPages:totalPages,
            page:page
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

// Get all products by price
export async function getAllProductsByPrice(req,res){
    let productList = [];

    if(req.query.catId !== "" && req.query.catId !== undefined){
        const productListArr = await ProductModel.find({
            catId:req.query.catid
        }).populate('category');

        productList = productListArr;

    }
    if(req.query.subCatId !== "" && req.query.subCatId !== undefined){
        const productListArr = await ProductModel.find({
            subCatId:req.query.subCatId
        }).populate('category');

        productList = productListArr;

    }
    if(req.query.thirdsubCatId !== "" && req.query.thirdsubCatId !== undefined){
        const productListArr = await ProductModel.find({
            thirdsubCatId:req.query.thirdsubCatId
        }).populate('category');

        productList = productListArr;

    }

    const filteredProducts = productList.filter((product)=>{
        if(req.query.minPrice && product.price < parseInt(+req.query.minPrice)){
            return false;
        }
        if(req.query.maxPrice && product.price > parseInt(+req.query.maxPrice)){
            return false;
        }
        return true;
    });
    return res.status(200).json({
        error:false,
        success:true,
        products:filteredProducts,
        totalPages:0,
        page:0
    })

}

// get all products by rating
export async function getAllProductsByRating(req,res){
    try{
        const page = parseInt(req.query.page)|| 1;
        const perPage = parseInt(req.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts/perPage);

        if(page > totalPages){
            return res.status(404).json({message:"page not found",success:false,error:true})
        }

        let products = [];

        if(req.query.catId !== undefined){
            products = await ProductModel.find({
                rating:req.query.rating,
                catId:req.query.catId,
    
            }).populate('category')
            .skip((page-1)*perPage)
            .limit(perPage).exec();

        }
        if(req.query.subCatId !== undefined){
            products = await ProductModel.find({
                rating:req.query.rating,
                subCatId:req.query.subCatId,
    
            }).populate('category')
            .skip((page-1)*perPage)
            .limit(perPage).exec();

        }
        if(req.query.thirdsubCatId !== undefined){
            products = await ProductModel.find({
                rating:req.query.rating,
                thirdsubCatId:req.query.thirdsubCatId
    
            }).populate('category')
            .skip((page-1)*perPage)
            .limit(perPage).exec();

        }         

        if(!products){
            res.status(500).json({
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            products:products,
            totalPages:totalPages,
            page:page
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

// get all products count
export async function getProductsCount(req,res){
    try{
        const productsCount = await ProductModel.countDocuments()

        if(!productsCount){
            res.status(500).json({
                success:false,
                error:true
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            productsCount:productsCount
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

// get all features products
export async function getAllfeaturedProducts(req,res){
    try{
        
        const products = await ProductModel.find({
            isFeatured:true

        }).populate('category')
        
        if(!products){
            res.status(500).json({
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            products:products,
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }

}

// delete product
export async function deleteProduct(req,res){
    try{
        const product = await ProductModel.findById(req.params.id).populate('category');

        if(!product){
            return res.status(500).json({
                message:"Product Not Found",
                error:true,
                success:false
            })
        }
    const images = product.images;

    for(let img of images){

        const imgUrl = img;
        const urlArr = imgUrl.split("/");
        const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0]

    if (imageName) {
        const response = await cloudinary.uploader.destroy(
            imageName,
            (error, result) => {
                // console.log(error,response)

            }
        );
        if (response) {
            res.status(200).send(response)
        }
    }
    }
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id)

    if(!deletedProduct){
            res.status(404).json({
            message:"product not deleted!",
            error:true,
            success:false
        })
    }
    return res.status(200).json({
        message:"Product Deleted succesfully",
        success:true
    })


    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })

    }
}

// get single product 
export async function getProduct(req,res){
    try{
        const product = await ProductModel.findById(req.params.id).populate("category")

        if(!product){
            res.status(404).json({
                message:"Product Not found",
                success:false,
                error:true
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            product:product
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
    });
   }
}

// delete Image
export const removeImageFromCloudinary = async (req, res) => {
    const imgUrl = req.query.img;

    const urlArr = imgUrl.split("/")
    const image = urlArr[urlArr.length - 1]

    const imageName = image.split(".")[0]

    if (imageName) {
        const response = await cloudinary.uploader.destroy(
            imageName,
            (error, result) => {
                // console.log(error,response)

            }
        );
        if (response) {
            res.status(200).send(response)
        }
    }
};

// update product
export const updateProduct = async(req,res)=>{
    try{
        const product = await ProductModel.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            description:req.body.description,
            images:req.body.images,
            brand:req.body.brand,
            price:req.body.price,
            oldprice:req.body.oldprice,
            catId:req.body.catId,
            catName:req.body.catName,
            subCatId:req.body. subCatId,
            subCat:req.body.subCat,
            thirdsubCat:req.body.thirdsubCat,
            thirdsubCatId:req.body.thirdsubCatId,
            countInStock:req.body. countInStock,
            rating:req.body.rating,
            discount:req.body.discount,
            productRam:req.body. productRam,
            size:req.body.size,
            productWeight:req.body.productWeight,

        },{new:true}
    );
    if(!product){
       return  res.status(404).json({
            message:"product not updated",
            status:false
        })
    }
    imageArr = [];

    return res.status(200).json({
        message:"product Updated successfully",
        error:false,
        success:true
    })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })

    }
}
