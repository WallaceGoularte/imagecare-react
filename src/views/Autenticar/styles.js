import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    height: 70px;
    background: #295393;
    border-bottom: 3px solid #88B3C7;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    img {
        width: 7%;
        height: 67px;

    }
`

export const Form = styled.div`
    width: 50%;
    height: 900%;
    margin: 80px;
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.75);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 55px;

`

export const Input = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    

    span {
        font-size: 27px;
        color: #295393;
    }

    input {
        margin-bottom: 35px;
        font-size: 16px;
        padding: 15px;
    }
    

`

export const HomeButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const HomeButton = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;

    
    button {
        width: 280px;
        height: 80px;
        background: #295393;
        border: none;
        font-size: 25px;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0ms.5 ease;

        &:hover {
        background: #88B3C7;
    }

    }
`
