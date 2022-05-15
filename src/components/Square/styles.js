import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    max-width: 130px;
    aspect-ratio: 1;
    margin: 0 auto;
    border-radius: 15%;
    background-color: ${props => props.color};
    transition: transform 0.3s ease-out;
    transform: scale(${props => props.wrong ? 0 : 1});

    &:active {
        border: .75rem solid rgba(9, 9, 9, .5);
    }
`;

export const Text = styled.span `
    font-size: clamp(1.5rem, 4.1vw + 1rem, 4rem);
    color: #FFF;
    text-shadow: 2px 1px 0px #333, 4px 3px 0px rgba(0,0,0,0.15);
`;