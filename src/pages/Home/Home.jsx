import React from "react";
import Iframe from "react-iframe";
import "../../App.css";

export default function Home() {
    return (
        <div align="center" className="container">
            <Iframe
                //url='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvZnJwYW50aGVyYV90aWdyaXNfYWx0YWljYV90aWdlcl8wLWltYWdlLWt6eGx2YzYyLmpwZw.jpg'
                width="50%"
                height="100%"
                scrolling="no"
                id=""
                className=""
                display="block"
                position="relative"
            />

            <canvas className="topcanvas"></canvas>
        </div>
    );
}
