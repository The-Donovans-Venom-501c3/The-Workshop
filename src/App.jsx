import "./App.css";
import Home from "./pages/Home/Home";
import ToolSelection from "./pages/ToolSelection/ToolSelection";
import EraseImage from "./assets/eraser.png";
import { useState, useRef } from "react";

function App() {
    const [colorHex, setColorHex] = useState("#000000");
    const [fontSize, setFontSize] = useState(0);
    const [toggle, setToggle] = useState(false);

    const sketchRef = useRef(null);

    const handleToggle = () => {
        setToggle((preToggle) => !preToggle);
    };

    return (
        <div className="app">
            <Home color={colorHex} fontSize={fontSize} sketchRef={sketchRef} />
            <button className="orange--button" onClick={handleToggle}>
                {toggle ? "Use Book" : "Interact!"}
            </button>
            {toggle && (
                <ToolSelection
                    setColor={setColorHex}
                    setFont={setFontSize}
                    colorHex={colorHex}
                    sketchRef={sketchRef}
                />
            )}
        </div>
    );
}

export default App;
