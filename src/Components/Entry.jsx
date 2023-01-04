import React from "react";
import { useState } from "react";
import "./Entry.css";
import ExpenseForm from "./ExpenseForm";
import {motion} from 'framer-motion'
import Index from './Storage/Index'
import { Bar } from "react-chartjs-2";
function Entry() {
  const [popup, setPopup] = useState(false);
  const[val,setVal]=useState("")
  function handlePopup() {
    setPopup((pre) => !pre);
  }

  function handlChange(e){
    setVal(e.target.value)
    console.log(val)
  }
  return (
    <>
      <div className="addBtn">
        <motion.button whileTap={{scale:0.9}} className="btn" onClick={handlePopup}>
          Add Entry
        </motion.button>
      </div>
      {popup && <ExpenseForm handlePopup={handlePopup} />}
      <div className="data">
        <div className="filter">
          <h3 className="margin">Filter By Year</h3>
          <select className="margin" onChange={handlChange}>
            <option value="2019"> Year</option>
            <option value="2019"> 2019</option>
            <option value="2020"> 2020</option>
            <option value="2021"> 2021</option>
            <option value="2022"> 2022</option>
            <option value="2023"> 2023</option>
          </select>
        </div>
        <div>
          <Index val={val}/>
        </div>
      </div>
    </>
  );
}

export default Entry;
