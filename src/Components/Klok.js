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
            <div className="hourmarks">
                <div index="0">12</div>
                <div index="1">1</div>
                <div index="2">2</div>
                <div index="3">3</div>
                <div index="4">4</div>
                <div index="5">5</div>
                <div index="6">6</div>
                <div index="7">7</div>
                <div index="8">8</div>
                <div index="9">9</div>
                <div index="10">10</div>
                <div index="11">11</div>
            </div>
        </div>
    )
}
export default Klok;