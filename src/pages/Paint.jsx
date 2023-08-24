import React from 'react';
import Canvas from '../Components/Canvas';

function Paint() {
    return (
        <div className="canvas">
            <Canvas
            width={500}
            height={500}
            />
        </div>
    )
}

export default Paint;