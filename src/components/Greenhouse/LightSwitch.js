import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext';


// console.log(useTheme);

function LightSwitch() {
  // const thing = useTheme()
  // console.log(thing)
  const {themeName, setThemeName} = useTheme();
  console.log(themeName);
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={()=> setThemeName("day")}>DAY</div>
      <div className="off" onClick={() => {setThemeName("night")}}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
