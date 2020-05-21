import React, { useState } from 'react';
import Box from "./Box";
function Boxes(params) {
     const [boxes, setBoxes] = useState(makeBoxes(params));
     console.log(boxes);
     function changeBoxColor() {
        let rand = Math.floor(Math.random() * params.numBoxes);
        setBoxes(boxes => {
            let updatedBoxes = [...boxes];
            updatedBoxes[rand] = returnColor(params.colors);
            return updatedBoxes;
        });
    }
    const allBoxes = boxes.map((color)=>
        <Box color={color}/>
    );
    return (
        <div id="box-container">
           {allBoxes}
           <button onClick={changeBoxColor}>Change Random Box Color</button>
        </div>
    )  
}

Boxes.defaultProps = {
    numBoxes: 16,
    colors: [
        "Aqua","DarkCyan", "Lavender", "Crimson", "Violet", "SteelBlue", "Plum", "CornflowerBlue",
         "Peru", "Coral", "Turquoise", "DodgerBlue", "SpringGreen", "Aquamarine", "Teal", "YellowGreen", "Tomato", "Thistle"
    ]
};

function returnColor(colors) {
    let rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function makeBoxes(params) {
    return Array.from({length: params.numBoxes}, () => returnColor(params.colors))
}




export default Boxes


