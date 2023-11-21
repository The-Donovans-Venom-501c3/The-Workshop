import React from "react";
import Iframe from "react-iframe";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import "../../App.css";

export default function Home() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
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
                width="600"
                height="400"
                strokeWidth={4}
                strokeColor="red"
            />
        </div>
    );
}
