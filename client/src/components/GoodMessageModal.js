import React, { useState, useEffect} from "react"

import { Collapse, Button } from 'antd';
import GoodMessageModalForm from './GoodMessageModalForm'


const GoodMessageModal = () => {

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}



return (
  <Collapse defaultActiveKey={['2']} onChange={callback}>
  <Panel header="Message User" key="1">
    <GoodMessageModalForm/>
  </Panel>
</Collapse>
)

}

export default GoodMessageModal

