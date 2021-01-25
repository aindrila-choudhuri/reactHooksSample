import React, { useMemo, useState } from "react";

//useMemo

// if we click on the CounterOne button, UI freezes for a fraction of second because isEven function takes time to execute (here we have intentionally slowed
// the function, but in reality a huge computation might happen inside this), but onClick of CounterTwo also UI freezes for a sec, this is because every time
// the state updates, the component re-renders, and when component re-renders isEven function is called, which is not expected behaviour
// here we need to tell React not to re-calculate certain values unnecessarilly, in our case we don't need to calculate counter one is even or odd when
// counter two is changed
function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo+1);
    }

    const isEven = useMemo(() => {
        let i=0;
        while (i<2000000000) i++;
        return counterOne % 2 === 0
    }, [counterOne])

    return(
        <div>
            <div>
                <button onClick={incrementCounterOne}>Counter One - {counterOne}</button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>
            <div>
                <button onClick={incrementCounterTwo}>Counter Two - {counterTwo}</button>
            </div>
            
        </div>
    )
}

export default Counter;