import styled from "styled-components";

export const Container = styled.ul`
display: flex;
margin: 40px 0px;
justify-content: center;
align-items: center;
list-style: none;
flex-wrap: wrap;
gap: 5px;
overflow: hidden;


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

img {
  width: 100%;
  height: 63%;
  
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
  box-shadow: 0 4px 4px -2px ${({ theme }) => theme.colors.primaryColor} ;
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
}

.car svg {
  font-size: 20px;
  cursor: pointer;
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

.buttons button {
  flex: 1;
  
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

export const More = styled.button`


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
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px auto;


:hover {
  background-color: red;
  
}

`

export const SearchContent = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;

`

