import express from "express"
import multer from "multer"


import GoodSerializer from "../../serializers/GoodSerializer.js"
import { Good } from "../../../models/index.js"
import uploadImage from "../../../services/uploadImage.js"

const goodsRouter = express.Router()

goodsRouter.get("/", async (req, res) => {
  try {
    const goods = await Good.query()
    const serializerGoods = []

    for ( const good of goods){
      const serializerGood = await GoodSerializer.getSummary(good)
      console.log(serializerGood);
      serializerGoods.push(serializerGood)
    }

    return res.status(200).json({goods: serializerGoods})
  } catch (error) {
    return res.status(500).json({errors: error})
  }
})

// const uploadTest = multer({dest:"img/"})

goodsRouter.post("/",uploadImage.single("image"), async (req, res) => {
   
  try {
    console.log(req)
    const {body, user} = req
    const {title, description, quantity}  = body

    const formData = {
      title,
      description,
      quantity,
      image: req.file.location, 
      userId: user.id
    } 
  console.log(formData);
    
    // console.log(newPostData);

    const newGood = await Good.query().insertAndFetch(formData)
    return res.status(201).json({good: newGood})  
  } catch (error) {
    console.log(error);
    return res.status(500).json({errors: error})
  }
})

goodsRouter.delete("/:goodId", async(req,res) => {
  const goodId = req.params.goodId
  console.log(goodId);
  try {
    const deleteGood = await Good.query().findById(goodId).delete()
    return res.status(201)
  } catch (error) {
    console.log(error);
    return res.status(500).json({errors: error})
  }
})

export default goodsRouter