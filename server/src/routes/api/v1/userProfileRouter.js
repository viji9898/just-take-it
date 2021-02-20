import express from "express"

// import GoodSerializer from "../../serializers/GoodSerializer.js"
import { User, Good, Message} from "../../../models/index.js"
// import uploadImage from "../../../services/uploadImage.js"

const userProfileRouter = express.Router()

userProfileRouter.get("/", async (req, res) => {
  const userId = req.user.id
  
  try {
    const user = await User.query().findById(userId)
    user.goods = await user.$relatedQuery("goods")
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

userProfileRouter.get("/messages", async (req, res) => {
  const userId = req.user.id
  
  try {
    const user = await User.query().findById(userId)
    console.log(user);
    user.goods = await user.$relatedQuery("userReceive")
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