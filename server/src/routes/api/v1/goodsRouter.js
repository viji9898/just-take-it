import express from "express"

import GoodSerializer from "../../serializers/GoodSerializer.js"
import { Good } from "../../../models/index.js"

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

goodsRouter.post("/", async (req, res) => {
  const newPostData  = req.body
  console.log(newPostData);
  const {title, description, quantity} = newPostData
  console.log(description, title); 
  

  try {
    const newGood = await Good.query().insertAndFetch({
      userId:"1",
      title,
      description,
      quantity, 
    })
    return res.status(201).json({good: newGood})  
  } catch (error) {
    console.log(error);
    return res.status(500).json({errors: error})
  }
})

export default goodsRouter