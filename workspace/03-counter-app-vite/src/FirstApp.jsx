import React from 'react';
import PropTypes from 'prop-types';


const FirstApp = ({ title, subtitle, name }) => {


  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle + 1}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'No hay título',
  subtitle: 'No hay subtítulo',
  name: 'Leandro'
}


export default FirstApp;