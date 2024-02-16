import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ valor }) => {

    const [counter, setCounter] = useState(valor);

    const hanbleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const resetButton = () => {
        setCounter(valor);
    }


    return (
        <>
            <h1>Valor:</h1>
            <h2>{counter}</h2>

            <button onClick={hanbleAdd}>
                +1
            </button>

            <button onClick={handleSubstract}>
                -1
            </button>

            <button onClick={resetButton}>
                Reset
            </button>
        </>
    );
}


CounterApp.propTypes = {
    valor: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    valor: 0
}
