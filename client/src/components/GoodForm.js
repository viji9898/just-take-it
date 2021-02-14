import React, { useState } from "react"

const GoodForm =(props) => {
  debugger

  const [goodRecord, setGoodRecord] = useState({
    title: "",
    description:"",
    quantity:"", 
  })

  const handleChange = (event) => {
    setGoodRecord({
      ...goodRecord,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addGood(goodRecord)
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            Title:
            <input
              class="textboxstyle"
              id="title"
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              value={goodRecord.name}
            />
          </label>

          <label htmlFor="description">
            Description:
            <input
              class="textboxstyle"
              id="description"
              type="text"
              name="description"
              placeholder="description"
              onChange={handleChange}
              value={goodRecord.description}
            />
          </label>

          <label htmlFor="quantity">
            Quantity:
            <input
              class="textboxstyle"
              id="quantity"
              type="text"
              name="quantity"
              placeholder="quantity"
              onChange={handleChange}
              value={goodRecord.quantity}
            />
          </label>

          {/* <label htmlFor="description">
            Trail Description:
            <input
              class="textboxstyle"
              id="description"
              type="text"
              name="description"
              placeholder="Trail Description"
              onChange={handleChange}
              value={goodRecord.description}
            />
          </label>

          <label htmlFor="estimateTime">
            Estimated Time to Complete:
            <input
              class="textboxstyle"
              id="estimateTime"
              type="text"
              name="estimateTime"
              placeholder="Estimated Time (in hours) to complete:"
              onChange={handleChange}
              value={goodRecord.estimateTime}
            />
          </label> */}

          <div>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default GoodForm