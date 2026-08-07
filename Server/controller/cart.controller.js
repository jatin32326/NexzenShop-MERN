import CartProductModel from "../models/cartProduct.model.js";
import UserModel from "../models/userModels.js";
import userModel from "../models/userModels.js";

export async function addToCartController(req,res){
  try{
    const userId = req.userId;
    const {productId}=req.body;

    if(!productId){
        return res.status(402).json({
            message:"provide product id",
            error:true,
            success:false
        })
    }

    const checkItemCart = await CartProductModel.find({
        userId:userId,
        productId:productId
    })

    if(checkItemCart){
        return res.status(400).json({
            message:"Item already in cart",
            error:true,
            success:false
        })
    }

    const cartItem = new CartProductModel({
        quantity:1,
        userId:userId,
        productId:productId
    })

   const save = await cartItem.save();

   const updateCartUser = await userModel.updateOne({_id:userId},{
    $push:{
        shoppiing_cart:productId
    }
   })

   return res.status(200).json({
    data:save,
    message:"Item add successfully",
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

// Get cart item 
export const getCartItemController = async(req,res)=>{
    try{
        const userId = req.userId

        const cartItem = await CartProductModel.findOneAndReplace({
            userId:userId,
        }).populate('productId')

        return res.json({
            data:cartItem,
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

// update cart item quantity constroller

export const updateCartitmeController = async(req,res)=>{
    try{
        const userId = req.userId;
        const { _id,qty } = req.body;

        if(!_id || !qty){
            res.status(400).json({
                message:"provide  _id,qty "
            })
        }

        const updateCartItem = await CartProductModel.updateOne(
            {
                _id:_id,
                userId:userId
            },{
                quantity:qty
            }
        )

        return res.status(200).json({
            message:"cart updated",
            error:false,
            success:true,
            data:updateCartItem
        })
       
    }catch(error){
        return res.status(500).json({
            message:"internal server Error",
            error:true,
            success:false
        })

    }
}

// delete cart 
export const deleteCartItemController = async(req,res)=>{
    try{
        const userId = req.userId;
        const { _id,productId } = req.body;

        if(!_id){
           return  res.status(400).json({
                message:"provide _id",
            })
        }

    const deleteCartItem = await CartProductModel.deleteOne( {_id:id,userId:userId })

    if(!deleteCartItem){
        return res.status(400).json({
            message:'The provide in the cart not found ',
            error:true,
            success:false
        })
    }

    const user = await UserModel.findOne({
        _id:userId
    })

    const cartitems = user?.shoppiing_cart

    const updateUserCart = [...cartitems.slice(0,cartitems.indexOf(productId)),...cartitems.slice(cartitems.indexOf(productId)+1)]

    user.shoppiing_cart = updateUserCart;

    await user.save()


    return res.status(200).json({
        message:"item removed",
        error:false,
        success:true,
        data:deleteCartItem
    })




    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error : true,
            success: false
        })
    }
}
