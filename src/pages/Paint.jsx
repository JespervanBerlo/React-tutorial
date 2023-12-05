import React from 'react';
import Canvas from '../Components/Canvas';

function Paint() {
    return (
        <main>
            <div className="container">
                <Canvas
                width={500}
                height={500}
                />
            </div>
        </main>
    )
}

export default Paint;