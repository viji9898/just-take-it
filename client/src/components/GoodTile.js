import React, { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"
import washing from "../../images/washing-machine.png"

const GoodTile = (props) => {
  const title = <p>{props.goodItem.title}</p>
  const img = props.goodItem.image
  const location =<p>Location: {`${props.goodItem.locationLat} ${props.goodItem.locationLong}`}</p>
  return(
    <div>
      {title}
      <img className="photo" src={img}/>
      {location}
    </div>
  )
}

export default GoodTile


