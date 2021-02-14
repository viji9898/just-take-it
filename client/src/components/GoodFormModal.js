import React, { useState, useEffect} from "react"
import { Modal, Button } from 'antd';
import GoodForm from "./GoodForm";
import RegistrationForm from "./registration/RegistrationForm"
import { Redirect } from "react-router-dom"

const GoodFormModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
 
  const showModal = () => {
    if(props.currentUser){
      setIsModalVisible(true);
    } else {
     return <Redirect to={"/users/new"}/>
    }
  };
  

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [goods, setGoods] = useState([props.goods])

  const addGood = async (goodPayload) => {
    try {
      const response = await fetch("/api/v1/goods",{
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(goodPayload),
      })
      const body = await response.json()
      setGood(body.goods)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        + Post an Item
      </Button>
      <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <GoodForm addGood={addGood}/>
      </Modal>
    </>
  )
}

export default GoodFormModal