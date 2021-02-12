import React, { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"

const GoodTile = (props) => {
  const title = <p>{props.goodItem.title}</p>
  const img = <p>{props.goodItem.image}</p>
  const location =<p>Location: {`${props.goodItem.locationLat} ${props.goodItem.locationLong}`}</p>
  return(
    <div>
      {title}
      {img}
      {location}
    </div>
  )
}

export default GoodTile
