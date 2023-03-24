import styled from "styled-components";

export const Container = styled.footer`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.primaryBg};
color: ${({ theme }) => theme.colors.primaryTextColor};
height: 80px;

`