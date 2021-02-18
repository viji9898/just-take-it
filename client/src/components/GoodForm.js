import React, { useState } from "react"
import Dropzone from "react-dropzone"

const GoodForm =(props) => {

  const [goodRecord, setGoodRecord] = useState({
    title:"",
    description:"",
    quantity:"",
    image:{} 
  })

  const [uploadedImage, setUploadedImage] = useState({
    preview: ""
  })

  const handleChange = (event) => {
    event.preventDefault()
    setGoodRecord({
      ...goodRecord,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleImageUpload = (acceptedImage) => {
    // sets state for the image we want to post
    setGoodRecord({
      ...goodRecord,
      image: acceptedImage[0]
    })

    // sets state for a preview of the one uploaded image
    setUploadedImage({
      preview: URL.createObjectURL(acceptedImage[0])
    })

    // // example for preview multiple images
    // setUploadedImage(acceptedImage.map(file => Object.assign(file, {
    //   preview: URL.createObjectURL(file)
    // })))
  }

  const clearForm = () => {
    setGoodRecord({
      title:"",
      description:"",
      quantity:"",
      image:{} 
    })
    setUploadedImage({
      preview: ""
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = new FormData()
    body.append("title", goodRecord.title)
    body.append("description", goodRecord.description)
    body.append("quantity", goodRecord.quantity)
    body.append("image", goodRecord.image)
    props.addGood(body)
    clearForm()
    props.closeModalOnSubmit()
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
              value={goodRecord.title}
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

          <Dropzone onDrop={handleImageUpload}>
            {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Upload Your image - drag 'n' drop or click to upload</p>
                </div>
              </section>
            )}
          </Dropzone>
          
          <img src={uploadedImage.preview} />

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
            <input 
              className="button" 
              type="submit" 
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default GoodForm