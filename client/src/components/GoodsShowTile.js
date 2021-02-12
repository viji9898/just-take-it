import React, { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"
import GoodTile from "./GoodTile"
import GoodShowPage from"./GoodShowPage"

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
  }, [])
  
  const goodsListItems = goods.map((goodItem) => {
    return (
      <GoodTile key={goodItem.id} goodItem={goodItem}/>
    )
  })

  const goodShowTile = goods.map((goodItem) => {
    return (
      <GoodShowPage key={goodItem.id} goodItem={goodItem}/>
    )
  })

  return (
    <div>
      <h1>JUST TAKE IT</h1>
      {goodsListItems}
    </div>
  )
}



export default GoodsShowTile