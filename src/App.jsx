import "./App.css";
import Home from "./pages/Home/Home";
import ToolSelection from "./pages/ToolSelection/ToolSelection";
import { useState } from "react";

function App() {

    const [toggle, setToggle] = useState(false);

    return (
        <div className="app">
            <Home />
            <button className="orange--button" onClick={() => setToggle(true)}>Use Book</button>
            {toggle && <ToolSelection />}
        </div>
    );
}

export default App;
