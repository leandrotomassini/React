import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, name }) => {


  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <label>{name}</label>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
  name: 'Leandro C. Tomassini',
  subtitle: 'No hay subtítulo',
  title: 'No hay título'
};