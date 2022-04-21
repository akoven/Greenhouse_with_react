import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import {useState, useEffect} from 'react';

function Thermometer() {
  const { temperature, setTemperature } = useClimate();
  const [target, setTarget]=useState(temperature);

  useEffect(()=>{
      const changeTemp = setTimeout(() => {
        if(target > temperature){
          setTemperature((prevTemp) => ++prevTemp)
        }
        if(target < temperature){
          setTemperature((prevTemp) => --prevTemp)
        }
      },1000)
      return () => clearTimeout(changeTemp);

  },[temperature,target,setTemperature])


  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={target}
        onAfterChange={(val) => {setTarget(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
