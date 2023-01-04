import React from "react";
import "./ExpenseForm.css";
// import "./Entry.css";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
function ExpenseForm({ handlePopup }) {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit(e) {
    const header = { "Access-Control-Allow-Origin": "*" };

    e.preventDefault();
    axios
      .post("http://localhost:2000/user", {
        id: uuidv4(),
        date: date,
        title: title,
        amount: amount,
        header,
      })
      .then(() => {
        handlePopup();
      });
  }
  return (
    <>
      <div className="modal">
        <div className="overlay">
          <motion.div
            layout
            initial={{ opacity: 0, y: "-1000vh" }}
            animate={{
              opacity: 1,
              y: "0",
              transition: { type: "spring", duration: 1 },
            }}
            exit={{ opacity: 0, y: "-1000vh", transition: { duration: 1 } }}
            className="modal-content"
          >
            <div className="h1">
              <h1>Keep Track Of Your Expenses</h1>
            </div>
            <motion.form className="form1" onSubmit={handleSubmit}>
              <label className="gap" htmlFor="title">
                Title:
              </label>
              <input
                className="gap"
                type="text"
                name="amt"
                id="Title"
                autoComplete="false"
                required
                placeholder="Enter Title Of Your Expenses"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <br />
              <label className="gap" htmlFor="amt">
                Amount:
              </label>
              <input
                className="gap"
                type="number"
                name="amt"
                id="amt"
                required
                placeholder="Enter Amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <br />
              <label className="gap" htmlFor="date">
                Date:
              </label>
              <input
                className="gap"
                type="date"
                name="date"
                id="date"
                required
                placeholder="Enter Date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <br />
              <motion.input
                whileTap={{ scale: 0.9 }}
                className="gap btn2"
                type="submit"
                id="submit"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handlePopup}
                className=" btn3"
              >
                Close
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ExpenseForm;
