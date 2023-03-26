import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 130px 0px 0px 0px;



input {
  width: 40%;
  height:35px;
  border-radius: 20px;
  border: 1px solid red;
  outline: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  margin-bottom: 40px;

}

`