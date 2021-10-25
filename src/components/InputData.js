import React, { useState } from 'react';
import './InputData.css';

const totalValuesCalculated = [{
    overallHours: 0,
    overallSalary: 0
}];
const InputData = (props) => {
    const [dayEntered, setDayEntered] = useState('');

    const [startTimeEntered, setStartTimeEntered] = useState('');
    const [offTimeEntered, setOffTimeEntered] = useState('');

    const [breakStartEntered, setBreakStartEntered] = useState('');
    const [breakFinishEntered, setBreakFinishEntered] = useState('');

    const [addTotalValues, setTotalValues] = useState(totalValuesCalculated);
    // const [addStuffButton, setAddStuffButton] = useState('');
    const dayChangeHandler = event => {
        setDayEntered(event.target.value);
    };
    const startTimeChangeHandler = event => {
        setStartTimeEntered(event.target.value);
    };
    const offTimeChangeHandler = event => { 
        setOffTimeEntered(event.target.value);
    };
    const breakStartChangeHandler = event => {
        setBreakStartEntered(event.target.value);
    };
    const breakFinishChangeHandler = event => {
        setBreakFinishEntered(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
            const startTime = new Date(dayEntered + ' ' + startTimeEntered);
            const offTime = new Date(dayEntered + ' ' + offTimeEntered);
            const breakStartTime = new Date(dayEntered + ' ' + breakStartEntered);
            const breakFinishTime = new Date(dayEntered + ' ' + breakFinishEntered);
          
           const totalStartMinutes = (startTime.getHours() * 60) + startTime.getMinutes();
           const totalOffMinutes = (offTime.getHours() * 60) + offTime.getMinutes();
           const totalStartBreakMinutes = ((breakStartTime.getHours() * 60) + breakStartTime.getMinutes());
           const totalOffBreakMinutes = ((breakFinishTime.getHours() * 60) + breakFinishTime.getMinutes());
           const resultHours = Math.floor(((totalOffMinutes - totalStartMinutes) - (totalOffBreakMinutes - totalStartBreakMinutes)) / 60);
           const resultMinutes = (((totalOffMinutes - totalStartMinutes) - (totalOffBreakMinutes - totalStartBreakMinutes)) % 60);
           const totalResult = `${resultHours}h ${resultMinutes}m`;
           const totalSalary = `${resultHours * 20 + resultMinutes * 0.33} zl`;
           const overallMinutes = (totalOffMinutes - totalStartMinutes) - (totalOffBreakMinutes - totalStartBreakMinutes);
           const overallSalary = resultHours * 20 + resultMinutes * 0.33;
           totalValuesCalculated.push(overallMinutes);
           totalValuesCalculated.push(overallSalary);
           setTotalValues(totalValuesCalculated);
        const inputDataObject = {
            id: Math.random().toString(),
            date: dayEntered,
            startWorkTime: startTimeEntered,
            offWorkTime: offTimeEntered,
            breakStart: breakStartEntered,
            breakFinish: breakFinishEntered,
            hours: totalResult,
            salary: totalSalary
        };
        props.onAddInputData(inputDataObject, addTotalValues);
        setDayEntered('');
        setBreakFinishEntered('');
        setBreakStartEntered('');
        setOffTimeEntered('');
        setStartTimeEntered('');
    };
    return (
       <div>
        <form onSubmit={submitHandler}>
            <label className="label">
              Day:
           </label>
              <input className="input-name" type="date" value={dayEntered} onChange={dayChangeHandler} required/>
            
            <label className="label">
            Start Work Time:
                </label>
            <input className="input-name" type="time" value={startTimeEntered} id="appt" name="appt" min="05:00" max="23:00" onChange={startTimeChangeHandler}  required></input>
            
            <label class="label">
            Off Work Time:
            <input className="input-name"  type="time" value={offTimeEntered} id="appt" name="appt" min="05:00" max="23:00" onChange={offTimeChangeHandler} required></input>
            </label>
   
            <label  className="label">
            Break Start:
                </label>
            <input className="input-name"  type="time" value={breakStartEntered} id="appt" name="appt" min="06:00" max="22:00" onChange={breakStartChangeHandler} required></input>
            
            <label className="label">
            Break Finish:
                </label>
            <input className="input-name"  type="time" value={breakFinishEntered} id="appt" name="appt" min="06:00" max="22:00" onChange={breakFinishChangeHandler} required></input>
            
           <input className="button-submit" type="submit" />
          </form>
        </div>
    );
}

export default InputData;