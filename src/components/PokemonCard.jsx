import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ url }) => {

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, [])

    return (

        <Link to={`/pokedex/${character.id}`} className={`${character.types?.[0]?.type?.name === "rock" ? "Card-rock"
            : character.types?.[0]?.type?.name === "fire" ? "Card-fire" 
            : character.types?.[0]?.type?.name === "fighting" ? "Card-fighting"
            : character.types?.[0]?.type?.name === "flying" ? "Card-flying"
            : character.types?.[0]?.type?.name === "flying" ? "Card-flying"
            : character.types?.[0]?.type?.name === "poison" ? "Card-poison"
            : character.types?.[0]?.type?.name === "ground" ? "Card-ground"
            : character.types?.[0]?.type?.name === "bug" ? "Card-bug"
            : character.types?.[0]?.type?.name === "ghost" ? "Card-ghost"
            : character.types?.[0]?.type?.name === "steel" ? "Card-steel"
            : character.types?.[0]?.type?.name === "water" ? "Card-water"
            : character.types?.[0]?.type?.name === "grass" ? "Card-grass"
            : character.types?.[0]?.type?.name === "electric" ? "Card-electric"
            : character.types?.[0]?.type?.name === "psychic" ? "Card-psychic"
            : character.types?.[0]?.type?.name === "ice" ? "Card-ice"
            : character.types?.[0]?.type?.name === "dragon" ? "Card-dragon"
            : character.types?.[0]?.type?.name === "dark" ? "Card-dark"
            : character.types?.[0]?.type?.name === "fairy" ? "Card-fairy"
            : character.types?.[0]?.type?.name === "unknown" ? "Card-unknown"
            : character.types?.[0]?.type?.name === "shadow" ? "Card-shadow"
            : "Card-normal"} Card`}>
            <div className={`${character.types?.[0]?.type?.name === "rock" ? "rock card-rock"
                : character.types?.[0]?.type?.name === "fire" ? "fire" 
                : character.types?.[0]?.type?.name === "fighting" ? "fighting" 
                : character.types?.[0]?.type?.name === "flying" ? "flying"
                : character.types?.[0]?.type?.name === "poison" ? "poison"
                : character.types?.[0]?.type?.name === "ground" ? "ground"
                : character.types?.[0]?.type?.name === "bug" ? "bug"
                : character.types?.[0]?.type?.name === "ghost" ? "ghost"
                : character.types?.[0]?.type?.name === "steel" ? "steel"
                : character.types?.[0]?.type?.name === "water" ? "water"
                : character.types?.[0]?.type?.name === "grass" ? "grass"
                : character.types?.[0]?.type?.name === "electric" ? "electric"
                : character.types?.[0]?.type?.name === "psychic" ? "psychic"
                : character.types?.[0]?.type?.name === "ice" ? "ice"
                : character.types?.[0]?.type?.name === "dragon" ? "dragon"
                : character.types?.[0]?.type?.name === "dark" ? "dark"
                : character.types?.[0]?.type?.name === "fairy" ? "fairy"
                : character.types?.[0]?.type?.name === "unknown" ? "unknown"
                : character.types?.[0]?.type?.name === "shadow" ? "shadow"
                :"normal"} style-card`}></div>
            <img src={character.sprites?.other.dream_world.front_default} alt="" />
            <div className='info-card'>
                <h2 className='color'>{character.name}</h2>
                <h3>{character.types?.[0]?.type?.name}</h3>
                <h6>Tipo</h6>
                <hr/>
                <div className='stats color'>
                    <div>
                        <h6>{character.stats?.[0]?.stat?.name}</h6>
                        <h4 >{character.stats?.[0]?.base_stat}</h4>
                    </div>
                    <div>
                        <h6>{character.stats?.[1]?.stat?.name}</h6>
                        <h4>{character.stats?.[1]?.base_stat}</h4>
                    </div>
                    <div>
                        <h6>{character.stats?.[2]?.stat?.name}</h6>
                        <h4>{character.stats?.[2]?.base_stat}</h4>
                    </div>
                    <div>
                        <h6>{character.stats?.[5]?.stat?.name}</h6>
                        <h4>{character.stats?.[5]?.base_stat}</h4>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default PokemonCard;