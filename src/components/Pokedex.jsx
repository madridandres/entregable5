import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const userName = useSelector(state => state.name);
    const [characters, setCharacters] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [types, setTypes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon") //Para quitar el limite
                                                        ///?offset=0&limit=1154
            .then(res => setCharacters(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setTypes(res.data.results))
    }, [])


    const searchPokemon = () => {
        navigate(`/pokedex/${pokemonName.toLowerCase()}`)
    }

    const filterType = (e) => {
        const url = e.target.value;
        axios.get(url)
            .then(res => setCharacters(res.data.pokemon))
    }

    console.log(characters)

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {userName}!</p>
            <div>
                <input 
                    type="text" 
                    placeholder='Search pokemon'
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                />
                <button onClick={searchPokemon}>
                    Search
                </button>
                <select className="selected" onChange={filterType} name="" id="">
                    {types?.map(type => (
                        <option 
                           value={type.url} 
                           key={type.name}
                        >
                            {type.name}
                        </option>
                    ))}
                </select>
            </div>
            <ul>
                {characters?.map(pokemon => (
                    <PokemonCard 
                        url={pokemon.url ? pokemon.url : pokemon.pokemon?.url} 
                        key={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
                    />
                 ))}
            </ul>
        </div>
    );
};

export default Pokedex;