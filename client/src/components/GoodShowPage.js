import React, { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"

const GoodShowPage = (props) => {
  const title = <p>{props.goodItem.title}</p>
  const img = <p>{props.goodItem.image}</p>
  const description=<p>{props.goodItem.description}</p>
  const location =<p>Location: {`${props.goodItem.locationLat} ${props.goodItem.locationLong}`}</p>
  return(
    <div>
      {title}
      {img}
      {description}
      {location}
      <button>Message Owner</button>
    </div>
  )
}

export default GoodShowPage
