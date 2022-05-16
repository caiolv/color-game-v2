/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pickColor } from '../store/game';

import Square from './Square';

export default function Squares() {
    const dispatch = useDispatch();
    const { newGame } = useSelector(state => state.game);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        resetColors();
    }, []);

    useEffect(() => {
        if (newGame) resetColors();
    }, [newGame]);

    useEffect(() => {
        getRandomColor();
    }, [colors]);

    function getRandomColor(){
        if (colors.length > 0) {
            var pickedColor = Math.floor(Math.random() * colors.length);

            dispatch(pickColor(colors[pickedColor]));
        }
    }

    function resetColors() {
        var newColors = [];
        for (var i = 0; i < 9; i++) {
            let newColor = getNewColor();
            newColors.push(newColor);
        }

        setColors(newColors);
    }

    function getNewColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`;
    }

    return (
        <section id="squares">
            {
                colors.map((color, index) => (<Square key={color} color={color} index={index} />))
            }
        </section>
    )
}
