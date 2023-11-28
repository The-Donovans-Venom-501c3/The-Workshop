import React, { useEffect } from "react";
import Iframe from "react-iframe";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Draggable from "react-draggable";
import "../Home/Home.css";

export default function Home({
    color,
    fontSize,
    sketchRef,
    val,
    setVal,
    idx,
    setIdx,
    toggle,
}) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    const increaseWidth = (e) => {
        let numberOfCharacters = e.target.value.length;

        if (numberOfCharacters >= 10) {
            let length = numberOfCharacters + "ch";
            e.target.style.width = length;
        }
    };

    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val];
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata);
    };

    useEffect(() => {
        // When the toggle is false, clear all the text inputs
        if (!toggle) {
            setVal([]);
        }
    }, [toggle]);

    return (
        <div align="center" className="container">
            {val.map((data, i) => {
                return (
                    <Draggable>
                        <div
                            key={i}
                            className="input--container"
                            onClick={() => setIdx(i)}
                        >
                            <input
                                className="input"
                                onInput={increaseWidth}
                                value={data}
                                onChange={(e) => handleChange(e, i)}
                            />
                        </div>
                    </Draggable>
                );
            })}

            <Iframe
                url={`https://heyzine.com/flip-book/${id}.html`}
                allowfullscreen="allowfullscreen"
                className="iframe"
            />

            {toggle && (
                <ReactSketchCanvas
                    ref={sketchRef}
                    width="100%"
                    height="100%"
                    strokeWidth={fontSize}
                    strokeColor={color}
                    canvasColor="transparent"
                    className="canvas"
                />
            )}
        </div>
    );
}
