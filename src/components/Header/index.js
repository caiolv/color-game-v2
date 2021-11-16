import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Header() {
    const { color, hasWon } = useSelector((state) => state.picked);

    return (
        <Container color={hasWon ? color : '#090909'}>
            <h1>The</h1>
            <span>{color}</span>
            <h1>Color Game</h1>
        </Container>
    )
}
