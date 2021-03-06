import React, { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"
import GoodTile from "./GoodTile"
import GoodShowPage from"./GoodShowPage"
import { Card, Col , Row} from 'antd';
import { useSetRecoilState, useRecoilState } from "recoil";
import atomGoods from "../store/store"

const style = {padding: '8px 0' };

const GoodsShowTile = (props) => {
  const [goodState, setGoodState] = useRecoilState(atomGoods)

  const [goods, setGoods] = useState([])
  // const [updateGoods, setUpdateGoods] = useState([])
  // console.log(goodState)
  const getGoods = async () => {
    try {
      const response = await fetch("/api/v1/goods")
      const body = await response.json()
      setGoods(body.goods)
      setGoodState([...body.goods])
      // console.log(goodState);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  useEffect(() => {
    getGoods()
  }, [])
  
  const goodsListItems = goods.map((goodItem) => {
    return (
      <Col className="gutter-row" span={6}>
        <div style={style}></div>
        <GoodTile key={goodItem.id} goodItem={goodItem}/>
      </Col>

    )
  })

  const goodShowTile = goods.map((goodItem) => {
    return (
      <GoodShowPage key={goodItem.id} goodItem={goodItem}/>
    )
  })

  return (
    <Row gutter={16}>
      {goodsListItems}    
    </Row>
  )
}



export default GoodsShowTile

