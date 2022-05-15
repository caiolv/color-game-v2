import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    max-width: 130px;
    aspect-ratio: 1;
    margin: 0 auto;
    border-radius: 15%;
    background-color: ${props => props.color};
    transition: opacity 0.6s;
    opacity: ${props => props.wrong ? 0 : 1}
`;

export const Text = styled.span `
    font-size: 2rem;
    color: #FFF;
    text-shadow: 2px 1px 0px #333, 4px 3px 0px rgba(0,0,0,0.15);
`;