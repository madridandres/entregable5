import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import pokedex_other_page from '../src/assets/img/pokedex-other-page.png'

const InputName = () => {

    const [userName, setUserName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const enterName = () => {
        dispatch(changeName(userName));
        navigate("/pokedex")
    }

    return (
        <div className='input-page'>
            <div className='img-tittle-input'>
                <img src={pokedex_other_page} alt="Pokedex-img" />
            </div>
            <h1 className='welcome'>¡Hola entrenador!</h1>
            <p className='text'>Para poder comenzar, dame tu nombre</p>
            <div className='name'>
                <input
                    className='input-name'
                    type="text"
                    placeholder='Tu nombre...'
                    onChange={e => setUserName(e.target.value)}
                    value={userName}
                />
                <button
                    onClick={enterName}
                    className='button-name'
                >Comenzar</button>
                <div>
                    <i className="fa-solid fa-circle fa-circle-black-input"></i>
                    <i className="fa-regular fa-circle fa-circle-white-input"></i>
                    <i className="fa-solid fa-square fa-square-red-input"></i>
                    <i className="fa-solid fa-square fa-square-black-input"></i>
                    <i className="fa-solid fa-circle fa-circle-gray-input"></i>
                </div>
            </div>
        </div>
    );
};

export default InputName;