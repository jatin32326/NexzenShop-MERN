import MyListModel from "../models/myList.model.js";

export const addToMyListController = async(req,res) => {
    try{
        const userId = req.userId
        const {
            productId,
            producTitle,
            image,
            price,
            oldPrice,
            rating,
            brand,
            discount
        } = req.body

        const item = await MyListModel.findOne({
            userId:userId,
            productId:productId
        })

        if(item){
           return res.status(400).json({
                message:"item already in My list"
            })
        }

        const myList = new MyListModel({
            productId,
            producTitle,
            image,
            price,
            oldPrice,
            rating,
            brand,
            discount,
            userId
        })

        const save = await myList.save()

        return res.status(200).json({
            message:"product saved in my list ",
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

// delete mylist 

export const deleteMyListController = async(req,res)=>{
    try{
        const myListItem = await MyListModel.findById(req.params.id)

        if(!myListItem){
            return res.status(400).json({
                message:"the item with this given id was not found",
                error:true,
                success:false
            })
        }

        const deleteItem = await MyListModel.findByIdAndDelete(req.params.id)

        if(!deleteItem){
            return res.stauts(400).json({
                message:"the item with this given id was not deleted",
                error:true,
                success:false
            })
        }

        return res.status(200).json({
            message:"item Deleted from MyList",
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
// get mylist 
export const getMyListController = async(req,res)=>{
    try{
        const userId = req.userId

        const mylistItems = await MyListModel.find({
            userId:userId
        })

        return res.status(200).json({
            error:false,
            success:true,
            data:mylistItems
        })


    }catch(error){
        return res.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
}