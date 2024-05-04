import PropTypes from 'prop-types';


const CounterApp = ({ valor }) => {



    return (
        <>
            <h1>Counter App</h1>
            <h2>{valor}</h2>
        </>
    );
}


CouterApp.propTypes = {
    value: PropTypes.number.isRequired
};


CouterApp.defaultProps = {
    value: 0
}

export default CounterApp;