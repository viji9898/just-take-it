import React, { useState, useEffect} from "react"
import { Modal, Button, Popconfirm, message, Divider, Space, List, Typography  } from 'antd';


const UserPostShowPage = () => {

  const [userGoods, setUserGoods] = useState({
    goods:[]
  })

  const [refresh, setRefresh] = useState(false)

  const getUserGoods = async () => {
    try {
      const response = await fetch("/api/v1/userprofile/")
      const body = await response.json()
  
      setUserGoods(body.goods)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  useEffect(() => {
    getUserGoods()
  },[refresh])

 const handleDelete = (id) =>{
 async function deletePost(goodId) {
    await fetch(`/api/v1/goods/${goodId}`, { method: 'DELETE' });
    setRefresh(true)
    setStatus('Delete successful');
}
deletePost(id);
 } 

 function confirm(e) {
  console.log(e);
  message.success('Deleted');
}

function cancel(e) {
  console.log(e);
  message.error('Delete Cancelled');
}


  const userGoodsList = userGoods.goods.map((good)=>{
     return (
      <div key={good.id} title="Card title" bordered={true} style={{ width: 300 }}>
        {good.title}
        <br/>
        <Space align="center">
          <Button className="button-margins" type="primary" onClick={handleDelete}>
            Edit
          </Button>
        </Space>
        <Popconfirm
            title="Confirm delete ?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">
              <Button goodId={good.id} danger type="primary" onClick={()=>handleDelete(good.id)}>
              Withdraw
              </Button>
            </a>
        </Popconfirm>
      </div>  
    )
})

let showDivider = <Divider orientation="left">Your Posted Items</Divider>

if(userGoodsList.length === 0){
  showDivider = ""
} 

  return (
    <div className="site-card-border-less-wrapper">
      {showDivider}
      <List
      size="small"
      // header={<div>Header</div>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={userGoodsList}
      renderItem={item => <List.Item>{item}</List.Item>}
      />
      {/* {userGoodsList} */}
    </div>
  )
}



export default UserPostShowPage

