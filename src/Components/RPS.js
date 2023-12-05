import React from "react";
function RPS() {

    const options = [
        {
            label:'Rock',
            value: 0
        },
        {
            label:'Paper',
            value: 1
        },
        {
            label:'Scissor',
            value: 2
        }
    ]

    function handleChange(){
       
        
    }

    function RandomOpponent(){
        return Math.floor(Math.random() * 3)
    }

    return(
        <div>
            <select onChange={handleChange}>
                {options.map((option) => (
                    <option value = {option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
};
export default RPS;