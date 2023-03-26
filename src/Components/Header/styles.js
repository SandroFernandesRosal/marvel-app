import styled from "styled-components";

export const Container = styled.header`
background-color: ${({ theme }) => theme.colors.primaryBg};
color: ${({ theme }) => theme.colors.primaryTextColor};
height: 80px;
position: fixed;
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
border-bottom: 1px solid red;
z-index: 999;

.logo {
  width: 80px;
 

}

.sun {
  color: yellow;
  font-size:25px;
  cursor: pointer;
}

.moon {
  color: violet;
  font-size:25px;
  cursor: pointer;
}

.menu {
  width: 30px;
  height: 35px;
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}


.menu svg {
  font-size: 20px;
  color: red;
}

.menu:hover {
  background-color: red;
  transition: 0.4s;
}
.menu svg:hover {
  transition: 0.4s;
  color: white;
}


.switch svg  {
  
  padding: 3px;
}

`;

export const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;

width: 100vw;
height: 100vh;
backdrop-filter: blur(8px);
background-color: rgba(100, 100, 100, 0.1);


 ul {
  display: flex;
 flex-direction: column;
 justify-content: center;
 height: 100%;
 text-align: center;
 
}

li {
  margin: 5px;
  font-size: 30px;
  font-weight: bold;
}

li:hover {
  color: red;
}
`