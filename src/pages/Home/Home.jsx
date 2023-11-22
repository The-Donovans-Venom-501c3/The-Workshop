import React, { useState } from "react";
import Iframe from "react-iframe";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Draggable from 'react-draggable';
import "../../App.css";

export default function Home({ color, fontSize, sketchRef, val, setVal, idx, setIdx }) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    //console.log("fontSize:", fontSize);


    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }

    return (
        <>
            <div align="center" className="container">

                <div className="overlay">
                    {val.map((data, i) => {
                        return (
                            <Draggable >
                                <div className="box" key={i} onClick={() => setIdx(i)}>
                                    <input value={data} onChange={e => handleChange(e, i)} />
                                </div>
                            </Draggable>
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
            </div>
        </>
    );
}
