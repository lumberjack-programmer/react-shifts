import React, { useState } from "react";
import './CalculateButton.css';
import TotalValuesTable from "./TotalValuesTable";
  
    const CalculateButton = (props) => {
    const [overallMinutes, setOverallMinutes] = useState('');
    const [overallSalary, setOverallSalary] = useState('');
    const doCalculation = () => {
        let onlyMinutes = 0;
        let onlySalary = 0;
        for(let i = 1; i < props.totalList.length; i++){
            if (i % 2 === 0){
                onlySalary += props.totalList[i];
               
            } else {
                onlyMinutes += props.totalList[i];
            }
        }     
        setOverallMinutes(onlyMinutes);
        setOverallSalary(onlySalary);
        console.log(`Overall Minutes: ${onlyMinutes}. Overall Salary: ${onlySalary}`);
        console.log(props.totalList); 
       };
    return (
        <div>
            <TotalValuesTable totalMinutes={overallMinutes} totalSalary={overallSalary} />
            <button onClick={doCalculation} className="button-calculate">Calculate</button>
        </div>
    );
};

export default CalculateButton;