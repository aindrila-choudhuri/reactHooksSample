import React, { useCallback, useState } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

// useCallback

// on click of incrementAge or incrementSalary every component will reload, 
// Even if we make these components React.memo on cick of incrementAge both the buttons and Count component with Age text will re-render,
// same for incrementSalary, because onClick of incrementSalary or incrementAge a new copy of Button onClick function is created, when dealing with 
// functions we need to consider reference equality, this is also not expected behaviour.
// useCallback will cache incrementSalary functions and return that if salary is not incremented, same for incrementAge. with React.memo we can use it
// in that case if incrementSalary is clicked only the Count and Button component related to salary will be rendered, same for age 
function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age+1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary+1);
    }, [salary]);

    return(
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent;


