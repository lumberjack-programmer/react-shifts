import React from "react";
import './InputTable.css';



const TotalValuesTable = (props) => {
    const resultHours = Math.floor((props.totalMinutes) / 60);
    const resultMinutes = ((props.totalMinutes) % 60);
    
    const totalResult = `${resultHours}h ${resultMinutes}m`;

    return (

<div class="input-table__wrapper">
    <h2>Total Amount</h2>
<table>
  <tr>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td>Total Hours</td>
           <td>Total Salary</td>
</tr>
<tr>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td>{totalResult}</td>
           <td>{`${props.totalSalary} zl`}</td>
 </tr>
</table>

        </div>
    );

};


export default TotalValuesTable ;


