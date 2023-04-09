import styled from "styled-components"

export const ButtonCar = styled.button`
width: 100vw;
height: 60px;
bottom: 0;
border: none;
outline: none;
background-color: rgba(255, 0, 0, 0.7);
color: white;
position: fixed;
border-radius: 25px 25px 0px 0px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;

svg {
  font-size: 30px;
}

.cartitems {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.cartnumber {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;

}
`