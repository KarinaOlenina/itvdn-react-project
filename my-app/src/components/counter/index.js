//Инкремент и декремент
import React, { useState } from "react";


function Counter() {

    // State to store count value
    const [count, setCount] = useState(0);

    // Function to increment count by 1
    const incrementCount = () => {
        // Update state with incremented value
        setCount(count + 1);
    };

    const decrementCount = () => {
        // Update state with incremented value
        setCount(count - 1);
    };

    return (
        <div className="app">
            <button onClick={incrementCount}>Click Here</button>
            <button onClick={decrementCount}>Click Here</button>
            {count}
        </div>
    );
}

export default Counter;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
