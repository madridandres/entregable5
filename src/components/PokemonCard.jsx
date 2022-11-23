import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, [])

    console.log(character)

    return (
        
        <Link to={`/pokedex/${character.id}`} className="Card">
            <img src={character.sprites?.front_default} alt="" />
            <h1>{character.name}</h1>
            <h3>{character.types?.[0]?.type?.name}</h3>
            <h6>Tipo</h6>
            <div className='stats'>
                <div>
                    <h6>{character.stats?.[0]?.stat?.name}</h6>
                    <h4>{character.stats?.[0]?.base_stat}</h4>
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
        </Link>
    );
};

export default PokemonCard;