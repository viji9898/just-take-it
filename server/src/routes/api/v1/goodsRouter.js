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

export default goodsRouter