import React from "react";
import "./ToolSelection.css";
import Eraser from "../../assets/eraser.png";
import Highlighter from "../../assets/highlighter.png";
import Marker from "../../assets/marker.png";
import Pencil from "../../assets/pencil.png";
import Text from "../../assets/text.png";

const ToolSelection = () => {
    return (
        <div className="toolbar">
            <div className="color--container">
                <div className="color--left--container">
                    <h3>Color choice:</h3>
                    <input
                        className="color--picked"
                        type="color"
                        value="#43da86"
                    />
                </div>

                {/* Need to Create Component Later */}
                <div className="color--right--container">
                    <button
                        className="color--button"
                        style={{ backgroundColor: "#e98427" }}
                    />

                    <button
                        className="color--button"
                        style={{ backgroundColor: "#438342" }}
                    />

                    <button
                        className="color--button"
                        style={{ backgroundColor: "#6f219e" }}
                    />

                    <button
                        className="color--button"
                        style={{ backgroundColor: "#e9bb18" }}
                    />

                    <button
                        className="color--button"
                        style={{ backgroundColor: "#59371d" }}
                    />

                    <button
                        className="color--button"
                        style={{ backgroundColor: "#1c1a1a" }}
                    />

                    <button
                        className="color--button"
                        style={{ backgroundColor: "#fff2e5" }}
                    />
                </div>
            </div>

            {/* Need to Create Component Later */}
            <div className="images--container">
                <img src={Marker} alt="marker" />
                <img src={Pencil} alt="pencil" />
                <img src={Highlighter} alt="highlighter" />
                <img src={Eraser} alt="eraser" />
                <img src={Text} alt="text" />
            </div>
        </div>
    );
};

export default ToolSelection;
