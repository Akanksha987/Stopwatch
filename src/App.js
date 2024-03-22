import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [time,setTime]=useState(0);
  const [isRunning,setIsRunning]=useState(false);
  
  useEffect(()=>{
    var interval;    if(isRunning){
      interval=setInterval(()=>{
        setTime(prevTime=>prevTime+1);
      },1000);
    }else {
      clearInterval(interval);
    }
    return()=>{
      clearInterval(interval);
    }
  },[isRunning]);
  const handleStart=()=>{
    setIsRunning(true)
  }
  const handleStop=()=>{
    // 
    setIsRunning(false)
    // setTime(0)
  }
  const handleReset=()=>{
    setTime(0);
    setIsRunning(false);
  }
  return (
    <div className="App">
      <span>{Math.floor(time/3600).toString().padStart(2,'0')}</span>
      <span>{Math.floor((time%3600)/60).toString().padStart(2,'0')}</span>
      <span>{(time%60).toString().padStart(2,'0')}</span>
      <br/>
      <button onClick={handleStart} >Start</button>
      <button onClick={handleStop}  >Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
