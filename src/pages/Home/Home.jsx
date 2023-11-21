import React from "react";
import Iframe from "react-iframe";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "../../App.css";

export default function Home() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    const styles = {
        border: "0.0625rem solid #9c9c9c",
        borderRadius: "0.25rem",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
    };

    return (
        <div align="center" className="container">
            <Iframe
                url={`https://heyzine.com/flip-book/${id}.html`}
                allowfullscreen="allowfullscreen"
                className="iframe"
            />

            {/* <canvas className="topcanvas"></canvas> */}

            <ReactSketchCanvas
                style={styles}
                width="100%"
                height="100%"
                strokeWidth={4}
                strokeColor="red"
                canvasColor="transparent"
            />
        </div>
    );
}
