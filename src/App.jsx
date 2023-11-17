import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import ToolSelection from "./pages/ToolSelection/ToolSelection";

function App() {
    return (
        <div className="app">
            <Home />
            <button className="orange--button">Use Book</button>

            <ToolSelection />
        </div>
    );
}

export default App;
