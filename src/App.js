import React, {useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resumen from './componentes/Resumen';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const Contenedor = styled.div `
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div `
    background-color: #FFFFFF;
    padding: 3rem;
`;

function App() {

    const [ resumen, guardarResumen ] = useState({
        cotizacion: 0,
        datos: {
            marca: '',
            year: '',
            plan:''
        }

    });

    const [ cargando, guardarCargando ] = useState(false);

    // Extraer datos
    const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
        <Header
            titulo='Cotizador de seguros'
            
        />
        <ContenedorFormulario>
            <Formulario 
                guardarResumen={guardarResumen}
                guardarCargando={guardarCargando}
            />

            {cargando ? <Spinner /> : null}
            

            <Resumen 
                datos={datos}
            />
            {!cargando ?
                    <Resultado 
                        cotizacion={cotizacion}
                    /> : null
            }

        </ContenedorFormulario>
    </Contenedor>
  );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired,
}

export default App;
