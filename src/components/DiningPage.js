import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function DiningPage() {
    let [data,setData] = useState('')
    useEffect(()=>{
        if(localStorage.getItem('data')){
            let f = JSON.parse(localStorage.getItem('data'))
            if(f && f.length > 0){
                setData(f)
            }
        }
    },[])
  return (
    <>
    {
        data&& Array.isArray(data) && data.length >0 && data.map((value)=>{
            return <div>{value}</div>
        })
    }
    </>
  )
}

export default DiningPage