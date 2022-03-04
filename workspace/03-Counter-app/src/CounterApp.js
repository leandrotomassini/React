import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    // handledAdd
    const handledAdd = () => setCounter(counter + 1);
    const handledSubstract = () => setCounter(counter - 1);
    const handledReset = () => setCounter(value);

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handledReset}>Reset</button>
            <button onClick={handledAdd} >+1</button>
            <button onClick={handledSubstract} >-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp