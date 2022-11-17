import axios from 'axios';
import { useEffect, useState } from 'react';
import Personajes from './Personajes';

export default function ListadoPersonajes() {
    /**
     *  Inicializando los valores del estado en un arreglo vacio
     */
    const [personajes, setPersonajes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    /** metodo para acceder a los personajes de la api */
    const getPersonajes = () => {
        //ruta de la api
        axios.get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
            //console.log(response.data.results);
            setPersonajes(response.data.results);
        })
        .catch((error) => {console.log(error)})
    }

    /** Busqueda */
    const buscarPersonaje = e =>{
        setBusqueda(e.target.value);
        //console.log(e.target.value);
        filtrarPersonaje(e.target.value);
    }

    const filtrarPersonaje=(nombrePersonaje)=>{
        let resultBusqueda = personajes.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(nombrePersonaje.toLowerCase())){
                return elemento;
            }
        });
        setPersonajes(resultBusqueda);
    }

    /** montando la funcion getPersonajes */
    useEffect(() => {
        getPersonajes();
    }, [])

    return (
        /** Mapeando el arreglo de personajes y retornando sus datos
         * al componente Personajes.jsx
         */
        <div className="container">
            <br></br>
            <label htmlFor="" className='textoBusqueda'>Busqueda de personajes:</label>
            <input type="text" className='form-control' value={busqueda} placeholder='Ingrese el personaje' onChange={buscarPersonaje}/>
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


