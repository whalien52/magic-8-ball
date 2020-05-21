import React, { useState } from 'react';

function Box(params) {
    return (
        <div className="box" style={{backgroundColor: params.color}}>
        </div>
    )   
}
export default Box;