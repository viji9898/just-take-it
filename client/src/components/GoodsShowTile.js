import React, { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"

const GoodsShowTile = (props) => {
  const [goods, setGoods] = useState([])

  const getGoods = async () => {
    try {
      const response = await fetch("/api/v1/goods")
      const body = await response.json()
      setGoods(body.goods)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  useEffect(() => {
    getGoods()
  })
  
  const goodsListItems = goods.map((goodItem) => {
    return (
      <GoodTile goodItem={goodItem}/>
    )
  })

  return (
    <div>{goodsListItems}</div>
  )
}



export default GoodsShowTile