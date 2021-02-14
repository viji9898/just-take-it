import React, { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"
import { Modal, Button } from 'antd';

const GoodShowPage = (props) => {
  
  const { title, description, quantity, image} = props.goodData.goodItem

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  return(
    <>
      <Button type="primary" onClick={showModal}>
        Details
      </Button>
      <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
      footer={[
        <>    
        <Button key="back" onClick={handleCancel}  >
           Return
        </Button>
        </>
      ]}>
            <p>{description}</p>
      </Modal>
    </>
  )
}

export default GoodShowPage
