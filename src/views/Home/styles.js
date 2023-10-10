import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
`

export const HomeButtonsContainer = styled.div`
  display: flex;
  gap: 20px; 
  align-items: center;
  justify-content: center;
  padding: 200px;
  flex-direction: column;
  
`

export const HomeButton = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
button {
    width: 420px;
    height: 120px;
    background: #295393;
    border: none;
    font-size: 25px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 1s ease;

    &:hover {
    background: #88B3C7;
  }

}

`
