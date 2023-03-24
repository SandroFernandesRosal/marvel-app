import styled from "styled-components";

export const Container = styled.header`
background-color: ${({ theme }) => theme.colors.primaryBg};
color: ${({ theme }) => theme.colors.primaryTextColor};
height: 80px;

display: flex;
justify-content: space-around;
align-items: center;
border-bottom: 1px solid red;

`;