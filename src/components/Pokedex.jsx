import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import pokedex_other_page from '../assets/img/pokedex_other_page.png'

const Pokedex = () => {

    const userName = useSelector(state => state.name);
    const [characters, setCharacters] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [types, setTypes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154")
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

    const [page, setPage] = useState(1);
    const pokemonPerPage = 40;
    const lastIndex = page * pokemonPerPage;
    const firstIndex = lastIndex - pokemonPerPage;
    const pokemonPaginated = characters.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(characters.length / pokemonPerPage);

    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
    }

    return (
        <div>
            <div className='img-other-page'>
                <img src={pokedex_other_page} alt="Pokedex-img" />
            </div>
            <div>
                <i className="fa-solid fa-circle fa-circle-black-otherpage"></i>
                <i className="fa-regular fa-circle fa-circle-white-otherpage"></i>
                <i className="fa-solid fa-square fa-square-red-otherpage"></i>
                <i className="fa-solid fa-square fa-square-black-otherpage"></i>
                <i className="fa-solid fa-circle fa-circle-gray-otherpage"></i>
            </div>
            <p className='paragraph'><b>Bienvenido {userName},</b> aqu?? podr??s encontrar tu pokem??n favorito</p>
            <div className='name'>
                <input
                    className='input-name-pokedex'
                    type="text"
                    placeholder='Busca un pokem??n'
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
            <div className='pagination'>
                <button
                    className='fa-solid-pagination'
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    <i class="fa-solid fa-angles-left"></i>
                </button>
                {numbers.map(number => (
                    <button className='numbers' onClick={() => setPage(number)}>{number}</button>
                ))}
                <button
                    className='fa-solid-pagination'
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    <i class="fa-solid fa-angles-right"></i>
                </button>
            </div>

        </div>
    );
};

export default Pokedex;