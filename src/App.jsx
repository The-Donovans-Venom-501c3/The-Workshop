import "./App.css";
import Home from "./pages/Home/Home";
import ToolSelection from "./pages/ToolSelection/ToolSelection";
import { useState } from "react";

function App() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((preToggle) => !preToggle);
    };

    return (
        <div className="app">
            <Home />
            <button className="orange--button" onClick={handleToggle}>
                {toggle ? "Use Book" : "Interact!"}
            </button>
            {toggle && <ToolSelection />}
        </div>
    );
}

export default App;
