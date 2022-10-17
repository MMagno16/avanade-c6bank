import React from 'react';
import styled from '@emotion/styled';
// quando voce cria uma aplicação react com create-react-app, 
//ele tem uma exemplo de imagem, e é um SVG.

const Container = styled.div`
height: 100vh;
  width: 100vw;
  display: flex;
  background-image: url('/barco.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function RegisterPage() {
  return (
    <Container>register</Container>
  )
}
