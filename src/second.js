import React , {useMemo,useState,useCallback,useEffect, useRef} from "react";
import ReactDom from "react-dom/client";

//useRef hook

// count =5  then if we increment the counter by 1 then it re-render and make the money=0 again 
// money =6

// function App(){

//     const [count,setCount] = useState(0);
//     // let money = 0;
//     // money mein increment nahi ho raha hai because ye state variable nahi hai
//     // money bhi increase ho raha hai console mein but display nahi ho raha hai

//     const money = useRef(0); // INITALLY JO VALUE DENA CHAHTE HO DE SAKTE HO
   
//        return(
//         <>
//         <h1>Counter is: {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>

//         <h1>Money is: {money.current}</h1>
//         <button onClick={()=>{money.current=money.current+1}}>Increment</button>
    
        
//         </>
//        )
// }



// Stop Watch Project with the help of React
                                 // yaha time ki value 0 hai
// old function: setInterval: setTime(time+1) call it after every one second

function StopWatch(){

    const [time,setTime] = useState(0);
    const[isRunning,setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function start(){
        if(!isRunning){
       intervalRef.current = setInterval(()=>{
           setTime((prevTime)=>prevTime+1);   // yaha pe time =0 hi hai yaha increase nahi ho pa raha
           // call back latest value la ke dega therefore this 
       },1000)
    }
    setIsRunning(true);
    }

     function stop(){
        if(isRunning){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);  // means ki ab atopwatch ruk chuka hai now you caan set new interwal
        }
    }

     function reset(){
         clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }



    return(
       <>
       <h1><span className="sw-label">Stopwatch</span><span className="sw-time">{time}</span></h1>
       {/* // time wala ek state variable hai jo baar baar change hoga */}
       <button onClick={start}>Start</button>
       {/* // ya toh start ka reference {start} de do, ya call back ki tarah de do */}
       <br></br>
       <br></br>
       <button onClick={stop}>Stop</button>
       <br></br>
       <br></br>
       <button onClick={reset}>Reset</button>
       
       
       </>
    )

}

ReactDom.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>);