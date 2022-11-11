import axios from 'axios';
import { useEffect, useState } from 'react';
import Personajes from './Personajes';

export default function ListadoPersonajes() {
    /**
     *  Inicializando los valores del estado en un arreglo vacio
     */
    const [personajes, setPersonajes] = useState([]);

    /** metodo para acceder a los personajes de la api */
    const getPersonajes = () => {
        //ruta de la api
        axios.get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
            console.log(response.data.results);
            setPersonajes(response.data.results);
        })
        .catch((error) => {console.log(error)})
    }

    /** montando la funcion getPersonajes */
    useEffect(() => {
        getPersonajes();
    }, [])

    return (
        /** Mapeando el arreglo de personajes y retornando sus datos
         * al componente Personajes.jsx
         */
        <div>
            <div className='row'>
                {
                    personajes.map((personaje, indice) => {
                        return <Personajes key={indice} character={personaje}></Personajes>
                    })
                }
            </div>
        </div>
    )
}


