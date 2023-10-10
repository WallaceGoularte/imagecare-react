import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#88B3C7' : '#295393'};
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: background-color 1s ease;

    img {
        width: 20px;
        height: 20px;
    }

    span {
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover {
        background: #88B3C7;
    }

`