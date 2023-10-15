import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #295393;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    h3 {
        color: #295393;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0 30px;
    }

` 

export const Form = styled.div`
    width: 50%;
    height: 500px;
    margin-bottom: 70px;

`

export const Select = styled.select`
    width: 100%;
    background: #fff;
    border: 1px solid #295393;
    font-size: 16px;
    padding: 10px;
    color: #295393;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    span {
        color: #707070;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: 1px solid #295393;
        border-bottom: 1px solid #295393;
        cursor: pointer;

    }

`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button {
        width: 100%;
        background: #88B3C7;
        border: none;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;
    }

    &:hover {
      opacity: 0.7;
    }


`

export const Spacer = styled.div`
  height: 20px;
`
