import PropTypes from 'prop-types';


export const FirstApp = ({
    title,
    subtitle = 'La tierra explota!',
    name
}) => {

    // console.log(props);

    return (
        <>
            <h1>{title}</h1>
            <h3>{name}</h3>
            {/* <h1>{JSON.stringify(newMessage)}</h1> */}
            <p>{subtitle + 1}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
};

FirstApp.defaultProps = {
    name: 'Leandro C. Tomassini',
    subtitle: 'No hay subtítulo',
    title: 'No hay título'
};