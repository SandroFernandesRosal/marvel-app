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