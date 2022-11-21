import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, [])

    return (
        <Link to={`/character/${character.id}`}>
            <h1>{character.name}</h1>
            <img src={character.sprites?.other.dream_world.front_default} alt="" />
        </Link>
    );
};

export default PokemonCard;