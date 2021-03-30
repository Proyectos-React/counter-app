import React from 'react';
import PropTypes from 'prop-types'

// import React, { Fragment } from 'react';
// FC

const PrimeraApp = ({saludo, subtitulo}) => {
    // const saludo = {
    //     nombre: 'Josue',
    //     edad: 24
    // };
    
    return (
        <>  
            {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
            {/* <h1> {saludo.nombre} </h1> */}
            {/* <h1> {saludo.edad} </h1> */}
            <h1>
                {saludo}
            </h1>
            <p>{subtitulo}</p>
        </>
    );
}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;