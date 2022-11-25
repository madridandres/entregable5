import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pokedex_other_page from '../assets/img/pokedex_other_page.png'

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
                <img src={pokedex_other_page} alt="Pokedex-img" />
            </div>
            <div>
                <i className="fa-solid fa-circle fa-circle-black-otherpage"></i>
                <i className="fa-regular fa-circle fa-circle-white-otherpage"></i>
                <i className="fa-solid fa-square fa-square-red-otherpage"></i>
                <i className="fa-solid fa-square fa-square-black-otherpage"></i>
                <i className="fa-solid fa-circle fa-circle-gray-otherpage"></i>
            </div>
            <div className='general-base'>
                <div className='Card-detail'>
                    <div className={`${pokemon.types?.[0]?.type?.name === "rock" ? "rock"
                        : pokemon.types?.[0]?.type?.name === "fire" ? "fire" 
                        : pokemon.types?.[0]?.type?.name === "fighting" ? "fighting" 
                        : pokemon.types?.[0]?.type?.name === "flying" ? "flying"
                        : pokemon.types?.[0]?.type?.name === "poison" ? "poison"
                        : pokemon.types?.[0]?.type?.name === "ground" ? "ground"
                        : pokemon.types?.[0]?.type?.name === "bug" ? "bug"
                        : pokemon.types?.[0]?.type?.name === "ghost" ? "ghost"
                        : pokemon.types?.[0]?.type?.name === "steel" ? "steel"
                        : pokemon.types?.[0]?.type?.name === "water" ? "water"
                        : pokemon.types?.[0]?.type?.name === "grass" ? "grass"
                        : pokemon.types?.[0]?.type?.name === "electric" ? "electric"
                        : pokemon.types?.[0]?.type?.name === "psychic" ? "psychic"
                        : pokemon.types?.[0]?.type?.name === "ice" ? "ice"
                        : pokemon.types?.[0]?.type?.name === "dragon" ? "dragon"
                        : pokemon.types?.[0]?.type?.name === "dark" ? "dark"
                        : pokemon.types?.[0]?.type?.name === "fairy" ? "fairy"
                        : pokemon.types?.[0]?.type?.name === "unknown" ? "unknown"
                        : pokemon.types?.[0]?.type?.name === "shadow" ? "shadow"
                        :"normal"} style-card`}>
                    </div>
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt="" className='img-detail'/>
                    <div className='info-detail'>
                        <div>
                            <h1>#{id}</h1>
                            <h1>{pokemon.name}</h1>
                        </div>
                        <div className='features'>
                            <h4 className='uno'>Peso</h4>
                            <h4 className='dos'>Altura</h4>
                            <h4 className='tres'>{pokemon.weight}</h4>
                            <h4 className='cuatro'>{pokemon.height}</h4>
                        </div>
                        <div className='features2'>
                            <h3 className=' uno'>Tipo</h3>
                            <h3 className=' dos'>Habilidad</h3>
                            <h3 className={`${pokemon.types?.[0]?.type?.name === "rock" ? "rock"
                                : pokemon.types?.[0]?.type?.name === "fire" ? "fire" 
                                : pokemon.types?.[0]?.type?.name === "fighting" ? "fighting" 
                                : pokemon.types?.[0]?.type?.name === "flying" ? "flying"
                                : pokemon.types?.[0]?.type?.name === "poison" ? "poison"
                                : pokemon.types?.[0]?.type?.name === "ground" ? "ground"
                                : pokemon.types?.[0]?.type?.name === "bug" ? "bug"
                                : pokemon.types?.[0]?.type?.name === "ghost" ? "ghost"
                                : pokemon.types?.[0]?.type?.name === "steel" ? "steel"
                                : pokemon.types?.[0]?.type?.name === "water" ? "water"
                                : pokemon.types?.[0]?.type?.name === "grass" ? "grass"
                                : pokemon.types?.[0]?.type?.name === "electric" ? "electric"
                                : pokemon.types?.[0]?.type?.name === "psychic" ? "psychic"
                                : pokemon.types?.[0]?.type?.name === "ice" ? "ice"
                                : pokemon.types?.[0]?.type?.name === "dragon" ? "dragon"
                                : pokemon.types?.[0]?.type?.name === "dark" ? "dark"
                                : pokemon.types?.[0]?.type?.name === "fairy" ? "fairy"
                                : pokemon.types?.[0]?.type?.name === "unknown" ? "unknown"
                                : pokemon.types?.[0]?.type?.name === "shadow" ? "shadow"
                                :"normal"} text-detail type tres`}>{pokemon.types?.[0]?.type?.name}</h3>
                            <h3 className={`${pokemon.types?.[1]?.type?.name === "rock" ? "rock"
                                : pokemon.types?.[1]?.type?.name === "fire" ? "fire" 
                                : pokemon.types?.[1]?.type?.name === "fighting" ? "fighting" 
                                : pokemon.types?.[1]?.type?.name === "flying" ? "flying"
                                : pokemon.types?.[1]?.type?.name === "poison" ? "poison"
                                : pokemon.types?.[1]?.type?.name === "ground" ? "ground"
                                : pokemon.types?.[1]?.type?.name === "bug" ? "bug"
                                : pokemon.types?.[1]?.type?.name === "ghost" ? "ghost"
                                : pokemon.types?.[1]?.type?.name === "steel" ? "steel"
                                : pokemon.types?.[1]?.type?.name === "water" ? "water"
                                : pokemon.types?.[1]?.type?.name === "grass" ? "grass"
                                : pokemon.types?.[1]?.type?.name === "electric" ? "electric"
                                : pokemon.types?.[1]?.type?.name === "psychic" ? "psychic"
                                : pokemon.types?.[1]?.type?.name === "ice" ? "ice"
                                : pokemon.types?.[1]?.type?.name === "dragon" ? "dragon"
                                : pokemon.types?.[1]?.type?.name === "dark" ? "dark"
                                : pokemon.types?.[1]?.type?.name === "fairy" ? "fairy"
                                : pokemon.types?.[1]?.type?.name === "unknown" ? "unknown"
                                : pokemon.types?.[1]?.type?.name === "normal" ? "normal"
                                :"empty"} text-detail type cuatro`}>{pokemon.types?.[1]?.type?.name}</h3>
                            <h3 className='text-detail cinco'>{pokemon.abilities?.[0]?.ability?.name}</h3>
                            <h3 className={`${pokemon.abilities?.[1]?.ability?.name ? "text-detail" : "empty"} seis`}>{pokemon.abilities?.[1]?.ability?.name}</h3>
                        </div>
                    </div>
                </div>
                <div className='movements'>
                    <h1>Movements</h1>
                    <ul className='list-movements'>
                        {pokemon.moves?.map((movement) => (
                            <li>{movement.move.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokedexDetail;