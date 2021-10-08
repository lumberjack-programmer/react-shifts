import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";


// Use your config values here.
const firebaseConfig = {
  apiKey: "AIzaSyASThYkqrijoNIzKo7us_UcovDGiJZDHyQ",
  authDomain: "workingshifts-4fda7.firebaseapp.com",
  databaseURL: "https://workingshifts-4fda7-default-rtdb.firebaseio.com",
  projectId: "workingshifts-4fda7",
  storageBucket: "workingshifts-4fda7.appspot.com",
  messagingSenderId: "223856314682",
  appId: "1:223856314682:web:5e7b161d44477f4167e803",
  measurementId: "G-9J7DYN8CV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



