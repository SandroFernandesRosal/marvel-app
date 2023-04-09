import styled from "styled-components";

export const Container = styled.ul`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;




`

export const ContainerCharacters = styled.ul`
display: flex;

flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-bottom: 30px;

button {
  width: 50px;
  border: none;
  outline: none;
  border-radius: 5px;
}


button svg {
  font-size: 20px;
}

button svg:hover {
  color: green;
}
`
export const ContainerComics = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-bottom: 30px;
overflow: hidden;
button {
  width: 50px;
  border: none;
  outline: none;
  border-radius: 5px;
}

button svg {
  font-size: 20px;
}
button svg:hover {
  color: green;
}
`

export const Buy = styled.div`
width: 100vw;
height: 50vh;
position: absolute;
z-index: 999;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(8px);
background-color: rgba(100, 100, 100, 0.1);



`

export const ButtonPrice = styled.div`
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

button {
  outline: none;
  border: none;
  height: 25px;
  border-radius: 5px;
  padding: 5px;
  color: red;
}

button:hover{
  background-color: green;
  color: white;
}
`