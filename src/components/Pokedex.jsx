import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const userName = useSelector(state => state.name);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon") //Para quitar el limite
                                                        ///?offset=0&limit=1154
            .then(res => setCharacters(res.data.results));
    }, [])

    console.log(characters)

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {userName}!</p>
            <ul>
                {characters.map(character => (
                    <PokemonCard url={character.url}/>
                 ))}
            </ul>
        </div>
    );
};

export default Pokedex;