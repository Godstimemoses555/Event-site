import React, { useEffect } from 'react'
import {useCount,useData} from '../../Store'

const Advance = () => {
    const {data,tom,gad}=useCount()
    const {value,FetchData}=useData()

    useEffect(()=>{
       FetchData()

    },[])

    console.log(value)
  return (
    <div style={{display:"flex", alignItems:"center",justifyContent:"center",gap:"50px"}}>

    <button onClick={gad} style={{height:"50px", width:"150px",backgroundColor:"red",color:"white"}}>
      -
    </button>
    <h1>{data}</h1>

    <button onClick={tom} style={{height:"50px", width:"150px",backgroundColor:"red",color:"white"}}>
      +
    </button>
    </div>
  )
}

export default Advance