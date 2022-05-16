import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Header() {
    const { color, hasWon } = useSelector((state) => state.game);

    const headerColor = hasWon ? color : '#090909';
    const message = hasWon ? 'CONGRATZ' : color;

    return (
        <Container color={headerColor}>
            <h1>The</h1>
            <span>{message}</span>
            <h1>Color Game</h1>
        </Container>
    )
}
