import React, {useState} from "react";
import Timer from "./components/Timer";
import Info from "./components/Info";

function App() {
    const [startTimer, setStartTimer] = useState(false)
    const [isRefresh, setIsRefresh] = useState(false)
    const [circleInd, setCircleInd] = useState(false)
    const [currCircle , setCurrCircle] = useState([])


    const startAndStop = () => {
        setStartTimer(!startTimer)
    }
    const refresh = () => {
        setIsRefresh(true)
    }
    const createCircle = () => {
        setCircleInd(!circleInd)
    }
    const addCircle = (curr) => {
        setCurrCircle([...currCircle , curr])
    }

    console.log(currCircle)



  return (
    <div className="App">
        <Timer
            start={startTimer}
            refresh={isRefresh}
            setRefresh={setIsRefresh}
            setStart={setStartTimer}
            circle={circleInd}
            setCircle={setCircleInd}
            addCircle={addCircle}/>

        <button onClick={startAndStop}>START</button>
        <button onClick={refresh}>REFRESH</button>
        <button onClick={createCircle}>Do circle</button>
        <div>
            <Info criclesData={currCircle}/>
        </div>
    </div>
  );
}

export default App;
