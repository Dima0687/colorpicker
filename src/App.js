import { useState } from "react";
import InputColor from "./InputColor";
import ShowField from "./ShowField";

const App = () => {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ShowField 
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      />
      <InputColor 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>  
  )
}

export default App;
