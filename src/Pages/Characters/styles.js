import styled from "styled-components";
import Background from "../../IMG/characters3.png";

export const Container = styled.ul`
display: flex;
margin: 70px 0px 0px 0px;
justify-content: center;
align-items: center;
list-style: none;
flex-wrap: wrap;
overflow: hidden;
background-image: url(${Background});
background-size: 100%;
padding-bottom: 30px;
min-height: 100vh;

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
cursor: pointer;

:hover {
  transition: 0.8s;
  background-color: red;
  
}




img {
 width: 100%;
 border-bottom: 3px solid red;
 flex: 1.5;
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
backdrop-filter: blur(8px);
background-color: rgba(100, 100, 100, 0.1);

img {
  width:100%;
  height: 100%;
  border-radius: 0;
  
}
`

export const CardDescriptions = styled.div`
width: 70vw;
height: 70vh;
background-color: ${({ theme }) => theme.colors.primaryBg};
display: flex;
flex-direction: column;
box-shadow: 0 4px 4px -2px ${({ theme }) => theme.colors.primaryColor} ;
border-radius:0% 0% 10% 0%;


img {
 max-width: 100%;
 flex: 1;
}

.descriptions {
  width:100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
}

.descriptions button {
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 5px;

}

.descriptions span {
  padding: 0 10px;
  text-align: justify;
}

.descriptions button svg {
  font-size: 20px;
  color: red;
}

.descriptions button:hover {
background-color: red;
color: white;
}

.descriptions button svg:hover {
  color: white;
}

@media (min-width: 700px) {
width: 30vw;
}

`
export const More = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 4px -2px ${({ theme }) => theme.colors.primaryColor} ;
  cursor: pointer;
  height: 300px;
  width: 150px;
  border: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
  outline: none;
  border-radius:0% 0% 10% 0%;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  background-color: transparent;
  backdrop-filter: blur(8px);
  background-color: rgba(100, 100, 100, 0.1);
  margin: 0 10px;
  


.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1.5;
  
  backdrop-filter: blur(8px);
  background-color: rgba(100, 100, 100, 0.1);
  
  border-bottom: 3px solid red;
}

.icon svg {
  font-size: 80px;
  color: white;
  
}

.icon svg:hover {
  color: red;
}

.more-description {
 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 color: white;
 
}

@media (min-width: 700px) {
  height: 350px;
  width: 200px;
}


.linkTo {
  width: 100vw;
  height: 40px;
}
`

export const SearchContent = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;

`



