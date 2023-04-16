import styled from "styled-components";

export const Container = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.primaryBg};
color: ${({ theme }) => theme.colors.primaryTextColor};
height: 50px;
font-size: 16px;
font-weight: bold;

.sociais {
  display: flex;
  gap: 5px;
 
}

.sociais svg {
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
 

}

`