import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 220px;
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.75);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.5;
    }

`;

export const TopCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
            width: 55%;
            height: 75px;
        }
`;

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong {
        color: #295393;
        font-weight: bold;
    }

    span {
        color: #707070;
        
    }

`;

