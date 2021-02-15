import express from "express"

// import GoodSerializer from "../../serializers/GoodSerializer.js"
import { User, Good } from "../../../models/index.js"
// import uploadImage from "../../../services/uploadImage.js"

const userProfileRouter = express.Router()

userProfileRouter.get("/", async (req, res) => {
  // const user = req.user.id
  
  try {
    const user = await User.query().findById(4)
    console.log(user);
    user.goods = await user.$relatedQuery("goods")
    console.log(user.goods);
    // const serializerUser = []

    // for ( const good of user){
    //   // const serializerGood = await GoodSerializer.getSummary(good)
    //   console.log(serializerGood);
    //   serializerGoods.push(serializerGood)
    // }

    return res.status(200).json({goods: user})
  } catch (error) {
    return res.status(500).json({errors: error})
  }
})

export default userProfileRouter