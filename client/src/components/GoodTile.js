import React, { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"
import GoodShowPage from "./GoodShowPage"

import { Card, Col } from 'antd';

const GoodTile = (props) => {
  const goodData = props
  const title = <p>{props.goodItem.title}</p>
  const img = props.goodItem.image
  const location =<p>Location: {`${props.goodItem.locationLat} ${props.goodItem.locationLong}`}</p>
  return(

    <Card title={title}  hoverable bordered={false} style={{width:250}, {padding: 10}}
        cover = {<img alt={props.goodItem.title} src={img}/>}>
        <GoodShowPage goodData={goodData}/>
    </Card>

  )
}

export default GoodTile


