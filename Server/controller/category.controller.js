import CategoryModel from "../models/category.model.js";

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

// create category
export const createCategory = async(req,res)=>{
    try{
        let category = new CategoryModel({
            name:req.body.name,
            images:imageArr,
            parentId:req.body.parentId,
            parentCatName:req.body.parentCatName

        })

        if(!category){
           return res.status(500).json({
                message:'Category Not created',
                error:true,
                success:false
            })
        }
        
        category = await category.save()
        imageArr=[];

        return res.status(200).json({
            message:"category created",
            error:false,
            success:true,
            category:category
        });

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}

// get Categories
export const getCategories=async(req,res)=>{
    try{
        const categories = await CategoryModel.find();
        const categoryMap = {}

        categories.forEach(cat=>{
            categoryMap[cat._id]={...cat._doc,children:[]}
        })
        const rootCategories = [];

        categories.forEach(cat=>{
            if(cat.parentId){
                categoryMap[cat.parentId].children.push(categoryMap[cat._id])
            }else{
                rootCategories.push(categoryMap[cat._id]);
            }
            return res.status(200).json({
                error:false,
                success:true,
                data:rootCategories
            })
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

// get categories count 
export const getCategoriesCount=async(req,res)=>{
    try{
        const categoryCount = await CategoryModel.countDocuments({parentId:undefined});
        if(!categoryCount){
            res.status(500).json({success:false,error:true})
        }else{
            res.send({
                categoryCount:categoryCount,
            })
        }

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

// get sub categories count
export const getSubCategoriesCount=async(req,res)=>{
    try{
        const categories = await CategoryModel.find()
        if(!categories){
            res.status(500).json({success:false,error:true})
        }else{
            const subCatList = []
            for(let cat of categories){
                if(cat.parentId!==undefined){
                    subCatList.push(cat)
                }
            }
        }

        res.send({
            subCategoryCount:subCatList.length
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}
// get single category
export const getSingleCategory=async(req,res)=>{
    try{
        const category = await CategoryModel.findById(req.params.id)

        if(!category){
            res.status(500).json({
                message:"The category with the given ID  was not found",
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            error:false,
            success:true,
            category:category
        })

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })

    }
}

// remove image
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

// delete category
export const deleteCategory =async(req,res)=>{
    try{
        const category = await CategoryModel.findById(req.params.id)
        const images = category.images;
        
        // let img ="";
        for(let img of images){
            const imgUrl = img;
            const urlArr = imgUrl.split('/');
            const image = urlArr[urlArr.length-1];

            const imageName = image.split(".")[0];

            if(imageName){
                cloudinary.uploader.destroy(imageName,(error,result)=>{
                    //console.log(error,result)
                });
                //console.log(imageName)
            }
        }

        const subCategory = await CategoryModel.find({
            parentId:req.params.id
        })

        for(let i=0;i<subCategory.length;i++){
            console.log(subCategory[i]._id);

            const thirdsubCategory = await CategoryModel.find({
                parentId:subCategory[i]._id
            });
            for(let i=0;i<thirdsubCategory.length;i++){
                const deletedThirdSubCat = await CategoryModel.findByIdAndDelete(thirdsubCategory[i]._id);
            }
            const deletedSubCat =  await CategoryModel.findByIdAndDelete(subCategory[i]._id);

        }
        const deleteCat = await CategoryModel.findByIdAndDelete(req.params.id);

        if(!deleteCat){
            res.status(404).json({
                message:"Category Not found!",
                success:false,
                error:true
            })
        }
        res.status(200).json({
            message:"Category Deleted",
            success:true,
            error:false
        })

        

    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

// update category
export const updatedCategory=async(req,res)=>{
    try{
        const category = await CategoryModel.findByIdAndUpdate(
            req.params.id,{
                name:req.body.name,
                images:imageArr.length>0 ? imageArr[0] : req.body.images,
                parentId:req.body.parentId,
                parentCatName:req.body.parentCatName
            },
            {new:true}
         );

         if(!category){
            return res.status(500).json({
                message:"Category cannot be updated",
                success:false,
                error:true
            })
         }
         imageArr = []
         
         return res.status(200).json({
            message:"Category updated successfully",
            error:false,
            success:true,
            category:category
         })


    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            success:false
        })

    }

}


