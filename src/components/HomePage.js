import React, { useState } from "react";
import "antd/dist/antd.css";
import {Input, Button} from 'antd';
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [data, setData] = useState('')
  const submitData =(e)=>{
    console.log(data)
    let store = []
    if(localStorage.getItem('data')){
      store = JSON.parse(localStorage.getItem('data'))
    }
    store.push(data)
    let values = JSON.stringify(store)
    localStorage.setItem('data',values)
    navigate(`/joke`)

  }

  const fillValues =(e)=>{
    console.log(e.target.value)
    setData(e.target.value)
  }
  return (
    <>
<div>hello</div>
<Input
        style={{
          width: 'calc(100% - 200px)',
        }}
        defaultValue="https://ant.design"
        onChange={(e)=>{
          fillValues(e)}}
      />
      <Button type="primary" onClick={(e)=>{
        submitData(e)}}>Submit</Button>
    </>
  );
}

export default HomePage;
