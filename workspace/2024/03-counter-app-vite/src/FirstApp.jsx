import PropTypes from 'prop-types';


export const FirstApp = ({
    title,
    subtitle,
    name
}) => {



    return (
        <>
            <div data-testid="test-title">{title}</div>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
};

FirstApp.defaultProps = {
    title: "No hay título",
    subtitle: "No hay subtítulo"
};

