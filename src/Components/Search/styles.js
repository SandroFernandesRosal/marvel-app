import styled from "styled-components";

export const Container = styled.input`


  width: 40%;
  height:35px;
  border-radius: 20px;
  border: 1px solid red;
  outline: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  margin-bottom: 40px;
  
  .searchcomics {
    margin-top: 100px;
  }

`

export const SearchComic = styled.input`
 

  width: 40%;
  height:35px;
  border-radius: 20px;
  border: 1px solid red;
  outline: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  margin-top:100px;
  display: flex;
  justify-content:center;
  
  
`

