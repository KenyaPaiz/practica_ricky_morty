import axios from "axios";
import { useState, useEffect } from "react";


export default function BusquedaPersonaje() {
    const [personaje, setPersonaje] = useState([]);

    /** metodo para acceder a los personajes de la api */
    const getPersonaje_busqueda = () => {
        //ruta de la api
        axios.get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
            //console.log(response.data.results);
            setPersonaje(response.data.results);
        })
        .catch((error) => {console.log(error)})
    }

    /** montando la funcion getPersonajes */
    useEffect(() => {
        getPersonaje_busqueda();
    }, [])


    return (
        <div>BusquedaPersonaje</div>
    )
}
