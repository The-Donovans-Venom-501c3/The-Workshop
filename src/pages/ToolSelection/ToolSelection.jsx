import React, { useState } from "react";
import "./ToolSelection.css";
import { ToolsData } from "../../data/ToolsData";

const ToolSelection = () => {
    const [colorHex, setColorHex] = useState("#43da86");
    const [activeTool, setActiveTool] = useState("Marker");

    const handleToolClick = (toolName) => {
        setActiveTool(toolName);
    };

    const colorChoicesRender = (colors) => {
        return colors.map((color) => {
            return (
                <button
                    className="color--button"
                    style={{ backgroundColor: color }}
                    onClick={(e) => setColorHex(color)}
                />
            );
        });
    };

    const colorsRender = ToolsData.map((tool) => {
        return (
            <div
                key={tool.name}
                className={`color--container ${
                    activeTool !== tool.name ? "hidden" : ""
                }`}
            >
                <div className="color--left--container">
                    <h3>Color choice:</h3>

                    <input
                        className="color--picked"
                        type="color"
                        value={colorHex}
                        onChange={(e) => setColorHex(e.target.value)}
                    />
                </div>

                <div className="color--right--container">
                    {colorChoicesRender(tool.colors)}
                </div>
            </div>
        );
    });

    const toolsRender = ToolsData.map((tool) => {
        return (
            <div
                key={tool.name}
                className={`tool-container ${
                    tool.name === activeTool ? "active" : ""
                }`}
            >
                <img
                    src={tool.image}
                    alt={tool.name}
                    onClick={() => handleToolClick(tool.name)}
                />
            </div>
        );
    });

    return (
        <div className="toolbar">
            {colorsRender}

            {/* Need to Create Component Later */}
            <div className="tools--container">{toolsRender}</div>
        </div>
    );
};

export default ToolSelection;
