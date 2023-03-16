import { SetStateAction, useEffect, useState } from "react";


function ShowHex() {
  const [color, setColor] = useState("000");
  const handleClick = () => {
    // return `#${color}`;
    setColor(color);
  }
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setColor(event.target.value);
  }

  return (
    <div>
      <h1>show me the color!</h1>
      <p>
        Input any hex code to see the color.
      </p>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className="colorBox" style={{ background: `#${color}`}}></div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems:"center"}}><label style={{marginRight: '2px',}} htmlFor="hexcode">#</label>
      <input style={{width: '180px'}}type="text" value={color} id="hexcode" name="hexcode"
        onChange={handleChange}
      /></div>
      </div>

      {/* <button onClick={handleClick}
        className="colorButton"
      >
        submit
      </button> */}


    </div>
  );
}

export default ShowHex;
