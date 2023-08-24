import React, {useEffect, useState} from 'react';
function Klok(){

    const date = new Date();
    const [, setTime] = useState(Date.now());

    useEffect(() => {
        
        const interval = setInterval(() => 
             setTime(Date.now())
                
        , 1000
        );
        return() => {
            clearInterval(interval);
        };
    
    }, []);

    return(
        <div className="klok">
            <div className="middelpunt"></div>

            <div 
            className="uurwijzer"
            style={{transform: `rotateZ(${date.getHours() * 30 - 180}deg)`}}
            >
            </div>

            <div 
            className="minuutwijzer"
            style={{transform: `rotateZ(${date.getMinutes() * 6 - 180}deg)`}}
            >              
            </div>

            <div 
            className="secondewijzer"
            style={{transform: `rotateZ(${date.getSeconds() * 6 - 180}deg)`}}
            >
            </div>
        </div>
    )
}
export default Klok;