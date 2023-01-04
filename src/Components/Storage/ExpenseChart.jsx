import  Chart  from './Chart';
import React from 'react'

function ExpenseChart({expenses}) {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
      ];

      for(let expense of expenses ){
        let date = new Date(expense.date).toDateString().split(" ")[1]
        let month = date;

        for(let row of chartDataPoints){
            if(row.label===month){
                row.value+=expense.amount
            }
        }
      }
    //   console.log(chartDataPoints)
  return (
    <div>
      <Chart data={chartDataPoints}/>
    </div>
  )
}

export default ExpenseChart
