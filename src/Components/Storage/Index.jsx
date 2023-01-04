import React, { useEffect, useState } from 'react'
import ExpenseChart from './ExpenseChart'

import './Index.css'
function Index({val}) {
  const[item,setItem]=useState([])
  useEffect(()=>{
    const fetchData =async ()=>{
      const res = await fetch("http://localhost:2000/user")
      const data  = await res.json()
  
      setItem(data)
  
    }
    fetchData();
  },[])


  const filterItem =  item.filter((product)=>{
   if(val===""){
     return product
   }
   else if(product.date.toLowerCase().includes(val.toLowerCase())){
     return product
   }
  })

  return (
    <div className='container'> 
    <ExpenseChart expenses={filterItem}/>
        {
          item&&item.length>0?
         item.filter((product)=>{
          if(val===0){
            return product
          }
          else if(product.date.toLowerCase().includes(val.toLowerCase())){
            return product
          }
         }).map((data)=>{
          let NewDate = new Date(data.date).toDateString().split(" ").join("-");
          // console.log(NewDate)
          return(<div className='entries' key={data._id}>
            <div className='itemData'>
          <div className='date'>{NewDate}</div>
          <div className='title'>{data.title}</div>
            </div>
            <div  className='amt'>{data.amount}<i className="bi bi-currency-rupee"></i></div>
      </div>
      
      )
        }):<h1>No Data Available</h1>}
    </div>
  )
}

export default Index
