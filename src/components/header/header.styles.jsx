import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 60vh;
  width: 100%;
  color: var(--color-white);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding-left: 10%;
  align-items: center;
  background: ${({imageUrl}) => `url(${imageUrl})`} no-repeat center center fixed;
  background-size: cover;
  padding-top: 40px;
`;


