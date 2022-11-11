import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Personajes({character}) {
    /** Inicializando el estado */
    const [personaje, setPersonaje] = useState({});

    /** Metodo para obtener la url del componente ListadoPersonajes */
    const getPersonajeUrl = (url) => {
        axios.get(url).then((response) => {
            setPersonaje(response.data)
        }).catch((error) => console.log(error))
    }

    /** Montar y renderizar el metodo getPersonajeUrl */
    useEffect(() => {
        /** Mandamos como parametro la url de cada personaje en base al componente ListadoPersonaje */
        getPersonajeUrl(character.url);
    })

    return (
        <div className='col-md-4'>
            <div className="card mt-4">
                <img src={personaje.image} className="card-img-top" alt={personaje.name} />
                <div className="card-body">
                    <h5 className="card-title">{ personaje.name }</h5>
                    <p className="card-text">
                        <b>Status: </b> {personaje.status } <br></br>
                        <b>Species: </b> {personaje.species } <br></br>
                        <b>Gender: </b> {personaje.gender } <br></br>
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

