import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexDetail = () => {

    const [pokemon, setPokemon] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [id])

    return (
        <div>
            <div className='img-other-page'>
                <img src="../src/assets/img/pokedex-other-page.png" alt="Pokedex-img" />
            </div>
            <div>
                <i className="fa-solid fa-circle fa-circle-black-otherpage"></i>
                <i className="fa-regular fa-circle fa-circle-white-otherpage"></i>
                <i className="fa-solid fa-square fa-square-red-otherpage"></i>
                <i className="fa-solid fa-square fa-square-black-otherpage"></i>
                <i className="fa-solid fa-circle fa-circle-gray-otherpage"></i>
            </div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokedexDetail;