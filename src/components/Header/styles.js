import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    background-color: ${props => props.color};
    transition: background-color 0.6s;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);

    h1 {
        font-weight: 500;
        font-size: clamp(2.75rem, 8vw, 6rem);//font-size: 2.75rem;
        color: #fef;
        text-align: center;
        text-shadow: 0.3rem 0.19rem 0 #333, 0.6rem 0.3125rem 0 rgba(0,0,0,0.15);

    }

    span {
        display: block;
        font-size: 4rem;
        font-size: clamp(3.95rem, 9.5vw, 8rem);//font-size: 2.75rem;
        line-height: 3.5rem;
        font-weight: 700;
        color: #fef;
        text-align: center;
        text-shadow: 0.3rem 0.19rem 0 #333, 0.6rem 0.3125rem 0 rgba(0,0,0,0.15)

    }
`;