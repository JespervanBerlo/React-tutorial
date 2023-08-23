import React, {useEffect, useState} from 'react';
function Counter() {

    const [count, setCount] = useState(0)
    const [amplifier, setAmplifier] = useState(10000)
    const shop = [{upgrade1:'1', amp: 3, cost: 10 }, {upgrade2:'2', amp: 5, cost: 50}]

    function incrementCount() {
        setCount(prevCount => prevCount + amplifier);
    }
    function upgrade(event) {
        
        let upgradeTier = event.target.getAttribute('index')
        console.log(upgradeTier)
        
        setCount(prevCount => prevCount - shop[upgradeTier].cost);
        setAmplifier(prevAmplifier => prevAmplifier + shop[upgradeTier].amp)
    }
    

    useEffect(() => {
        
        const interval = setInterval(() => {
            
                setCount(prevCount => prevCount + amplifier);    
                
        }, 1000
        );
        return() => {
            clearInterval(interval);
        };
    
    });

    return(
        <div>
            <h1>{count}</h1>
            <h1>{amplifier}</h1>
            <button onClick={incrementCount}>Click me</button>
            <button onClick={upgrade} index='0' name = "upgrade1">Upgrade 1</button>
            <button onClick={upgrade} index='1' name = "upgrade2">Upgrade 2</button>
        </div>
    )
}

export default Counter;