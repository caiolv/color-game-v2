import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    background-color: ${props => props.color};
    transition: background-color 0.6s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

    h1 {
        font-weight: 500;
        font-size: clamp(3rem, 10vw, 8rem);//font-size: 2.75rem;
        color: #fef;
        text-align: center;
        text-shadow: 4px 3px 0px #333, 8px 5px 0px rgba(0,0,0,0.15);

    }

    span {
        display: block;
        font-size: 4rem;
        font-size: clamp(4rem, 11vw, 8rem);//font-size: 2.75rem;
        line-height: 3.5rem;
        font-weight: 700;
        color: #fef;
        text-align: center;
        text-shadow: 4px 3px 0px #333, 8px 5px 0px rgba(0,0,0,0.15);

    }
`;