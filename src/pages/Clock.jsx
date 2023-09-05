import React from 'react';
import Klok from '../Components/Klok';
import '../clock.css'

function Clock() {
    return (
        <div className='content'>
            <div className="Clock">
                <Klok />
            </div>
        </div>
        
    );
}

export default Clock;