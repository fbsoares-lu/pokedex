import React, {useState, FormEvent} from 'react';

import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import {Article, Form, Content, Footer, Pokelist, Errors} from './styles';
import githubLogo from '../../assets/github.svg';
import linkedinLogo from '../../assets/linkedin.svg';

interface pokemonList {
    name: string;
    sprites: {
        front_default: string;
    };
    id: number;
}

const Dashboard: React.FC = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonList, setPokemonList] = useState<pokemonList[]>([]);
    const [error, setError] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>):Promise<void>    {
        event.preventDefault();

        if(!pokemonList) {
            setError('Pokemon not found.');
            return;
        }

        try {
            const response = await api.get(`/pokemon/${pokemon}`);

            const getPokemonList = response.data;

            setPokemonList([... pokemonList, getPokemonList]);
            setError('');
        } catch(err) {
            setError('Pokemon does not exist.');
        }
        
    };

    return (
        <Content>
            <Article>
                <h1>Pokedex</h1>
                <p>Welcome to a Pokemon journey.</p>

                <Form onSubmit={handleSubmit}>
                    <input 
                    value={pokemon}
                    onChange={(e):void => setPokemon(e.target.value)}
                    placeholder="Pokemon's name"
                    />
                    <button type="submit">Search</button>
                </Form>

                {error && <Errors>{error}</Errors>}

                <Footer>
                    <a href="https://github.com/fbsoares-lu">
                        <img src={githubLogo} width={40} alt=""/>
                    </a>

                    <a href="https://github.com/fbsoares-lu">
                        <img src={linkedinLogo} width={40} alt=""/>
                    </a>
                </Footer>
            </Article>

            <Pokelist>
                {pokemonList.map(pokemon => (
                    <a key={pokemon.id} href="">
                        <img src={pokemon.sprites.front_default} alt="pokemonImage"/>
                        <div>
                            <strong>{pokemon.name}</strong>
                            <p>Is a leaf pokemon</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </a>
                ))}
            </Pokelist>
        </Content>
    );
};

export default Dashboard;