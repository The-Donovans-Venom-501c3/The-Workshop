import React from "react";
import Iframe from "react-iframe";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "../../App.css";

export default function Home({ color, fontSize, sketchRef }) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    console.log("fontSize:", fontSize);

    return (
        <>
            <div align="center" className="container">
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
