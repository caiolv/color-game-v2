import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import picked, { won, reset, startAgain } from '../../store/picked';

import { Container, Text } from './styles';

export default function Square({ color, index }) {
    const dispatch = useDispatch();
    const [currentColor, setCurrentColor] = useState(color);
    const { color: pickedColor, hasWon } = useSelector(state => state.picked);
    const [wrong, setWrong] = useState(false);

    useEffect(() => {
        if (hasWon) {
            setCurrentColor(pickedColor);
            setWrong(false);
        }
    }, [hasWon]);

    function handleClick () {
        if (!hasWon) {
            if (pickedColor === color)
                dispatch(won());
            else
                setWrong(true);
        } else {
            dispatch(startAgain());
        }
    }

    return (
        <Container
            onClick={handleClick}
            color={currentColor}
            wrong={wrong}
        >
            {hasWon && index === 4 && <Text>Play again</Text>}
        </Container>
    )
}
