import React, { useEffect, useState } from "react" 
import MesssageTile from "./MessageTile"
import { Modal, Button, Popconfirm, message, List, Divider, Collapse , Space } from 'antd';
import GoodMessageModalForm from "../GoodMessageModalForm"
import { useRecoilState, } from "recoil"
import atomGoods from "../../store/store"


const MessageShowTile = (props) => {
  const [userMessages, setUserMessages] = useState({})
  const [allPresentGoods, setAllPrsentGoods] = useState([])
  const [goodState, setGoodState] = useRecoilState(atomGoods)

  const newMessages = {}

  
  const getMessages = async () => {
    try {
      const response = await fetch("/api/v1/messages")
      const body = await response.json()
      body.messages.forEach(result => {
            for(let i = 0; i <goodState.length; i++){
              if(goodState[i].id === result.goodId){
                result.good = {...goodState[i]}
              }
            }
            if(typeof newMessages[result.goodId] === 'undefined'){
                newMessages[result.goodId] = [];
              }
              newMessages[result.goodId].push(result)              
          })
          setUserMessages(newMessages)
    } catch (error) {
      console.error(`Error in Fetch" ${error.message}`)
      
    }
  }
  useEffect(()=>{
    getMessages()
  },[goodState])

const [showMessage, setShowMessage]= useState([])

    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = (messages) => {
      setShowMessage(messages)
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    function callback(key) {
      console.log(key);
    }

    const { Panel } = Collapse;

 const messageTitle = showMessage.map((message)=>{
   return (
     <div key={message.eky}>
       <p>
       <strong>USER:{message.email}</strong> {message.messageText}
       </p>
     </div>
  )
 })

//  const userMessageList = async = userMessages.map((key)=>{
//    await console.log(key);
//    debugger
//       return (
//       <div>
//         hello
//       </div>
//       ) 
//  }
// )



  let showMessageCenter = (
  <div>
    <Space align="center">
      {Object.keys(userMessages).map(key=>(
        userMessages[key][0].good? 
      <Button className="button-margins" type="primary" onClick={()=>showModal(userMessages[key])}>
        {userMessages[key][0].good.title}
        </Button>
          : null
      )
      )
    }
    </Space>
    <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {messageTitle}
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Message User" key="1">
          <GoodMessageModalForm/>
        </Panel>
      </Collapse>
    </Modal>
  </div>
 )

 if(userMessages.length === 0){
  showMessageCenter = ""
}
  return(
    <div className="site-card-border-less-wrapper">
      <Divider orientation="left">Message Center</Divider>
      {/* <List
        size="small"
        bordered
        dataSource={}
        renderItem={item => <List.Item>{item}</List.Item>}
      /> */}
      {showMessageCenter}
      {/* {userMessageList} */}
    </div>
  )
}

export default MessageShowTile
