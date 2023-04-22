import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, name }) => {


    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <span>{name}</span>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};


FirstApp.defaultProps = {
    name: 'Leandro',
    subtitle: 'No hay subtítulo',
    title: 'No hay título',
}