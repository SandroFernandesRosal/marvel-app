import styled from "styled-components";

export const Container = styled.ul`
display: flex;

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
cursor: pointer;
text-align: center;
border-radius: 5%;
background-color: ${({ theme }) => theme.colors.primaryBg};
margin: 10px;
padding-bottom: 10px;


img {
  width: 100%;
  height: 70%;
  border-bottom: 1px solid red;
  border-radius: 5% 5% 0% 0%;
}

.car {
  width: 50%;
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