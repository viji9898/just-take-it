import React, { useEffect, useState } from "react" 


const MessageShowTile = (props) => {
  const [messages, setMessages] = useState({
    good:[{
      title:""
    }]
  })

  const getMessages = async () => {
    try {
      const response = await fetch("/api/v1/messages")
      const body = await response.json()
      setMessages(body.messages)
    } catch (error) {
      console.error(`Error in Fetch" ${error.message}`)
      
    }
  }
  useEffect(()=>{
    getMessages()
  },[])

 const messageTitle = messages.good[0].title
  return(
    <p>{messageTitle}</p>
  )
}

export default MessageShowTile
