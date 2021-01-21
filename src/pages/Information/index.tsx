import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface PokemonParams {
    information: string;
}

const Information: React.FC = () => {

    const { params } = useRouteMatch<PokemonParams>();

    return (
        <h1>olas: {params.information}</h1>
    )
};

export default Information;