import React from "react";
import './InputTable.css';

const InputTable = (props) => {
    return (
<div class="input-table__wrapper">
    <h2>Records</h2>
<table>
{props.dataList.map(element => 
       <tr>
           <td>{element.date}</td>
           <td>{element.startWorkTime}</td>
           <td>{element.offWorkTime}</td>
           <td>{element.breakStart}</td>
           <td>{element.breakFinish}</td>
           <td>{element.hours}</td>
           <td>{element.salary}</td>
       </tr>
    )}
</table>
        </div>
    );
};
export default InputTable;