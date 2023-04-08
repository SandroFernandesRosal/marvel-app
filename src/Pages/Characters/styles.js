import styled from "styled-components";

export const Container = styled.ul`
display: flex;

justify-content: center;
align-items: center;
list-style: none;
flex-wrap: wrap;


`
export const CardItem = styled.li` 
display: flex;
flex-direction: column;
align-items: center;

box-shadow: 0 4px 4px -2px ${({ theme }) => theme.colors.primaryColor} ;
height: 300px;
width: 150px;
border: 1px solid ${({ theme }) => theme.colors.primaryColor};
text-align: center;
border-radius:0% 0% 10% 0%;
background-color: ${({ theme }) => theme.colors.primaryBg};
margin: 10px;


:hover {
  transition: 0.8s;
  background-color: red;
  
}


img {
 width: 100%;
 border-bottom: 3px solid red;
 flex: 1.5;
 cursor: pointer;
 
}

img:hover {
  transition:  0.5s;
  transform: scale(1.1)
  
}

.container-name {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  flex: 1;
  align-items: center;
  
}

.car {
  
  width: 100px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: red;
  cursor: pointer;
}

.car svg {
  font-size: 20px;
  
}

.car:hover {
 color: green;
}

@media (min-width: 700px) {
  height: 350px;
  width: 200px;
}

`
export const ContainerDescription = styled.div`
z-index: 10;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
top: 0px;
position: fixed;
backdrop-filter: blur(1px);
background-color: rgba(100, 100, 100, 0.1);

img {
  width:100%;
  height: 100%;
  border-radius: 0;
  
}
`

export const CardDescriptions = styled.div`
width: 70vw;

height: 50vh;
background-color: ${({ theme }) => theme.colors.primaryBg};

border-radius: 5%;
display: flex;




img {
 max-width: 50%;
 height:100%;
 
 border-radius: 5% 0% 0% 5%;
 
}

.descriptions {
  width:100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
}

@media (min-width: 700px) {
width: 50vw;
}

`



