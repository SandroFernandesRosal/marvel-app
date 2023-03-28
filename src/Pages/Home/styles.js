import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 130px 0px 0px 0px;

.more {
  cursor: pointer;
  width: 40%;
  height:35px;
  border-radius: 20px;
  border: 1px solid red;
  outline: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  margin: 40px 0;

}

.more:hover {
  background-color: red;
  
}

.linkTo {
  width: 100vw;
height: 40px;
}

.linkTo svg {
  font-size: 30px;
}

.countCar {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

`