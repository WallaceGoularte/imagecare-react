import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #295393;
    border-bottom: 3px solid #88B3C7;
    display: flex;

`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 15%;
        height: 60px;
    }

`

export const RightSide = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 70px;

    a {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px; 

        &:hover{
            color: #88B3C7;
        }
    }

    #notification {
        img {
            width: 25px;
            height: 25px;
            color: #88B3C7;
        }
        span {
            background: white;
            color: #88B3C7;
            padding: 0% 5px;
            border-radius: 50%;
            position: relative;
            top: -15px;
            right: 9px;
        }

        &:hover {
            opacity: 0.4;
        }
    }

    .dividir::after {
        content: "|";
        margin: 0 10px;
        color: white;
    }

`