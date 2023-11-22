import React, { useState } from "react";
import Iframe from "react-iframe";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "../../App.css";

export default function Home({ color, fontSize, sketchRef }) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    const [val, setVal] = useState([]);
    const [idx, setIdx] = useState(null);

    //console.log("fontSize:", fontSize);
    console.log(idx);

    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = () => {
        const deletVal = [...val]
        deletVal.splice(idx, 1)
        setVal(deletVal)
    }
    return (
        <>
            <div align="center" className="container">

                <div className="overlay">
                    {val.map((data, i) => {
                        return (
                            <div className="try" key={i} onClick={() => setIdx(i)}>
                                <input value={data} onChange={e => handleChange(e, i)} />
                            </div>
                        )
                    })}
                </div>

                <Iframe
                    url={`https://heyzine.com/flip-book/${id}.html`}
                    allowfullscreen="allowfullscreen"
                    className="iframe"
                />

                <ReactSketchCanvas
                    ref={sketchRef}
                    width="100%"
                    height="100%"
                    strokeWidth={fontSize}
                    strokeColor={color}
                    canvasColor="transparent"
                    className="canvas"
                />

                <button onClick={() => handleAdd()}>Add</button>
                <button onClick={() => handleDelete()}>x</button>
            </div>
        </>
    );
}
