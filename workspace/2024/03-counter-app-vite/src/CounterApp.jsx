import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = (valueCounter) => {
        setCounter(counter + valueCounter);
    };

    return (
        <>
            <h1>Counter App</h1>
            <h2> {counter} </h2>

            <button onClick={() => handleAdd(1)}>
                +1
            </button>

            <button onClick={() => handleAdd(-1)}>
                -1
            </button>

            <button onClick={() => setCounter(value)}>
                Reset
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};