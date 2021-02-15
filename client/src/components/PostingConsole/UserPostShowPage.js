import React, { useState, useEffect} from "react"


const UserPostShowPage = () => {

  const [userGoods, setUserGoods] = useState({
    goods:[]
  })

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
  },[])

  const userGoodsList = userGoods.goods.map((good)=>{
     return (
      <li key={good.id}>
       {good.title}
      </li>  
    )
})

  return (
    <ul>{userGoodsList}</ul>
  )
}



export default UserPostShowPage