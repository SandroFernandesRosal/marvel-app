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
export const CardItens = styled.li` 
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 400px;
width: 150px;
text-align: center;
background-color: transparent;
margin: 10px;
box-shadow: 0 4px 4px -2px black;



img {
  width: 100%;
  height: 63%;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;


}


:hover {
  transition:  0.5s;
  transform: scale(1.05)
}

.container-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
  width: 100%;
  flex: 1;
  align-items: center;
  background-color: rgba(1,1,1,0.5);
  color: white;
  padding-bottom: 3px; 

}

.car {
  width: 100px;
  height: 30px;
  display: flex;
  justify-content:space-evenly;
  align-items: center;
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
 background-color: red;
 color: white;
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 5px;
  
}

@media (min-width: 700px) {
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
width: 80vw;
height: 70vh;
background-color: ${({ theme }) => theme.colors.primaryBg};
display: flex;
box-shadow: 0 4px 4px -2px ${({ theme }) => theme.colors.primaryColor} ;


img {
 max-width: 50%;
 flex: 1;
}

.descriptions {
  width:100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex: 1;
}

.descriptions h4 {
  min-height: 35px;
}

.descriptions button {
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
  margin-top: 10px;
  min-height: 30px;

}

.descriptions span{
  text-align: justify;
  padding: 0 10px;
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
width: 50vw;
}

`

export const More = styled.button`


  cursor: pointer;
  height: 400px;
  width: 150px;
  
  
  outline: none;
  text-align: center;
  border: none;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: transparent;
  margin: 0 10px;
  box-shadow: 0 4px 4px -2px black;


.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 63%;
  border: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
  
  background-color: rgba(100, 100, 100, 0.5);
  
  backdrop-filter: blur(8px);
  background-color: rgba(100, 100, 100, 0.1);
  
}

.icon svg {
  font-size: 80px;
  
}

.icon svg:hover {
  color: red;
}

.more-description {
 
  display: flex;
  color: white;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(1,1,1,0.5);
}

@media (min-width: 700px) {
width: 200px;
}
`

export const SearchContent = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;

`

