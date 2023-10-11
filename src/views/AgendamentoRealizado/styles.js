import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    button {
        background: none;
        border: none;
    }
`

export const Conteudo = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

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