import React, { useState } from "react";
import InputData from "./components/InputData";
import './index.css';
import InputTable from './components/InputTable';
import Card from './UI/Card';
import CalculateButton from './components/CalculateButton';

const testList = [{
  id: '0',
  date: 'Date',
  startWorkTime: 'Start Work Time',
  offWorkTime: 'Off Work Time',
  breakStart: 'Break Start',
  breakFinish: 'Break Finish',
  hours: 'Hours',
  salary: 'Salary'
}];

const App = () => {
  const [testListUpdated, setTestListUpdated] = useState(testList);
  const [totalListState, setTotalListState] = useState('');
  const addInputData = (acceptedInputDataObject, totalList) => {
  setTestListUpdated([...testList, acceptedInputDataObject]);
  testList.push(acceptedInputDataObject);
  setTotalListState(totalList);
  };
  // dataList={testList}
  return (
    <Card>
    <InputData onAddInputData={addInputData}/>
    <InputTable dataList={testListUpdated} />
    <CalculateButton  totalList={totalListState} />
    </Card>
  );
}

export default App;
