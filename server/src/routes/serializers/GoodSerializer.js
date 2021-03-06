class GoodSerializer {
  static async getSummary(good){
    const allowedAttributes = ["title", "description", "quantity", "image", "id"]

    let serializedGood = {}
    for (const attribute of allowedAttributes){
      serializedGood[attribute] = good[attribute]
    }

    return serializedGood
  }
}

export default GoodSerializer