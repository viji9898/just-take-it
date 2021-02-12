import express from "express"

import { Good } from "../../../models/index.js"

const goodsRouter = express.Router()

goodsRouter.get("/", async (req, res) => {
  try {
    const goods = await Good.query()
    return res.status(200).json({goods: goods})
  } catch (error) {
    return res.status(500).json({errors: error})
  }
})

goodsRouter.post("/", async (req, res) => {
  const newPostData  = req.body
  console.log(newPostData);
  const {userId, title, description, quantity, locationLat, locationLong, image} = newPostData
  console.log(description, title); 
  

  try {
    const newGood = await Good.query().insertAndFetch({
      userId,
      title,
      description,
      quantity, 
      locationLat,
      locationLong,
      image
    })
    return res.status(201).json({good: newGood})  
  } catch (error) {
    console.log(error);
    return res.status(500).json({errors: error})
  }
})

export default goodsRouter