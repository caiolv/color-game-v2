import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    max-width: 130px;
    aspect-ratio: 1;
    margin: 0 auto;
    border-radius: 15%;
    background-color: ${props => props.color};
    transition: all 0.3s ease-out;
    transform: scale(${props => props.wrong ? 0 : 1});
    box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.2);

    &:active {
        /* border: .75rem solid rgba(9, 9, 9, .15); */
        transform: translateY(15px);
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    }
`;

export const Text = styled.span `
    font-size: clamp(1.5rem, 4.1vw + 1rem, 4rem);
    color: #FFF;
    text-shadow: 0.125rem 0.06rem 0 #333, 0.25rem 0.1875rem 0 rgba(0,0,0,0.15);
`;