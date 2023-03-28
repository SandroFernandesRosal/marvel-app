import styled from "styled-components";

export const Container = styled.ul`
display: flex;
margin-top: 70px;
justify-content: center;
align-items: center;
list-style: none;
flex-wrap: wrap;
gap: 5px;




`
export const CardItens = styled.li` 
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border:1px solid red;
height: 250px;
width: 150px;

text-align: center;
border-radius: 5%;
background-color: ${({ theme }) => theme.colors.primaryBg};
margin: 10px;
padding-bottom: 10px;

:hover {
  border: 1px solid green;
}



img {
  width: 100%;
  height: 70%;
  border-bottom: 1px solid red;
  border-radius: 5% 5% 0% 0%;
  cursor: pointer;
}

img:hover {
  border-bottom: 1px solid green;
}

.car {
  width: 50%;
  
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

export const ButtonCar = styled.button`
width: 100vw;
height: 40px;
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

`

