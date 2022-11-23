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
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=73") //Para quitar el limite
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

    console.log(characters) //Eliminar al terminar

    const [page, setPage] = useState(1);
    const pokemonPerPage = 16;
    const lastIndex = page * pokemonPerPage;
    const firstIndex = lastIndex - pokemonPerPage;
    const pokemonPaginated = characters.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(characters.length / pokemonPerPage);

    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
    }

    console.log(numbers)

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
            <p className='paragraph'><b>Bienvenido {userName},</b> aquí podrás encontrar tu pokemón favorito</p>
            <div className='name'>
                <input
                    className='input-name-pokedex'
                    type="text"
                    placeholder='Busca un pokemón'
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                />
                <button
                    onClick={searchPokemon}
                    className="button-name"
                >
                    Buscar
                </button>
                <select className="selected" onChange={filterType} name="" id="">
                    {types?.map(type => (
                        <option
                            value={type.url}
                            key={type.name}
                        >
                            {type.name?.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <ul >
                    <li className="Card-section">
                        {pokemonPaginated?.map(pokemon => (
                            <PokemonCard
                                url={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
                                key={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
                            />
                        ))}
                    </li>
                </ul>
            </div>
            <div>
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Prev Page
                </button>
                {numbers.map(number => (
                    <button onClick={() => setPage(number)}>{number}</button>
                ))}
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    Next Page
                </button>
            </div>

        </div>
    );
};

export default Pokedex;