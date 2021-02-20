import React, { useState, useEffect} from "react"
import { Modal, Button } from 'antd';
import GoodForm from "./GoodForm";
import RegistrationForm from "./registration/RegistrationForm"
import { Redirect } from "react-router-dom"
import SignInForm from "./authentication/SignInForm"

const GoodFormModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false)

  const showModal = () => {
    if(props.currentUser){
      setIsModalVisible(true);
    } else {
      setShowLoginPage(true)
    }
  };



  
  
  if(showLoginPage){
    console.log("works");
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const [goods, setGoods] = useState([props.goods])

  const addGood = async (goodPayload) => {
   
    try {
      const response = await fetch("/api/v1/goods",{
        method: "POST",
        // headers: {
        //   "Accept": "image/png"
        // },
        body: goodPayload
      })
 
      const body = await response.json()
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  return (    <>
    <Button block shape="round" type="primary" onClick={showModal}>
      + Post an Item
    </Button>
    <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <GoodForm addGood={addGood} closeModalOnSubmit={handleOk}/>
    </Modal>
    <Modal title="" visible={showLoginPage} onOk={handleOk} onCancel={handleCancel}>
    <SignInForm closeModalOnSubmit={handleOk}/>
  </Modal>
  </>
  )
}

export default GoodFormModal