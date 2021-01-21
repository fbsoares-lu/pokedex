import React, {useState, FormEvent, useEffect } from 'react';

import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Header, Form, PokemonList, InputError } from './styles';

interface Pokemon {
    name: string;
    order: number;
    types: {
        type: {
            name: string;
        }
    };
    sprites: {
        front_default: string;
    };
};


const Dashboard: React.FC = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonList, setPokemonList] = useState<Pokemon[]>(() => {
        const localStoragePokemon = localStorage.getItem('@Pokedex:pokemons');

        if (localStoragePokemon) {
            return JSON.parse(localStoragePokemon);
        } else {
            return [];
        }
    });
    const [inputError, setInputError] = useState('');

    useEffect(() => {
        localStorage.setItem('@Pokedex:pokemons', JSON.stringify(pokemonList));
    }, [pokemonList]);

    async function handleAddPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!pokemonName) {
            setInputError('forgot the name of the pokemon');
            return;
        }
        
        try {
            await api.get(`/pokemon/${pokemonName}`).then((response) => {
                setPokemonList([...pokemonList, response.data]);
                setPokemonName('');
                setInputError('');
            });
        } catch {
            setInputError('Pokemon not exist');
        }
    }

    return(
        <>
            <Header>
                <h1>Pokedex</h1>
            </Header>
            <Form hasError={!!inputError} onSubmit={handleAddPokemon}>
                <input 
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)} 
                    placeholder="Pokemon's name"
                />
                <button>Search</button>
            </Form>
            {inputError && <InputError>{inputError}</InputError>}
            <PokemonList>
                {pokemonList.map(pokemon => (
                    <a key={pokemon.order} href="/">
                        <img src={pokemon.sprites.front_default} alt=""/>
                        <div>
                            <strong>{pokemon.name}</strong>
                            <p>info a mais</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </PokemonList>

        </>
    )
};

export default Dashboard;