import React from "react"

import GoodsShowTile from "./GoodsShowTile"


import { Row, Divider, Col } from 'antd';

const style = { background: '#0092ff', padding: '8px 0px' };

const MainShowPage = (props) => {
  return (
    <>
    <Divider orientation="left">
      Freebies
    </Divider>
    <GoodsShowTile/>
    </>
  )
}

export default MainShowPage

