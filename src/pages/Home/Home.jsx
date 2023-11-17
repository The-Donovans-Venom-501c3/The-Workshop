import React from "react";
import Iframe from "react-iframe";
import "../../App.css";

export default function Home() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const id = urlParams.get("id");

    return (
        <div align="center" className="container">
            <Iframe
                url={`https://heyzine.com/flip-book/${id}.html`}
                allowfullscreen="allowfullscreen"
                className="iframe"
            />

            <canvas className="topcanvas"></canvas>
        </div>
    );
}
