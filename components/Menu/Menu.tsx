import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';


const MenuContainer = styled.nav`
display: flex;
flex-direction: column;
width: 100%;
color: #f8f8f8;
background-color: #242424;
ul{
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  border: solid;
  flex-direction: column;
  li{
    font-weight: 400;
    font-size: 1.2rem;
    width: 100%;
    display: flex;
    list-style: none;
    line-height: 60px;
    border: solid 4px transparent;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    &:hover{
      background: #888;
      border-left-color: #fffb19 ;
      cursor: pointer;
  }
}
}
`

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <Link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">
            <a>
          Início
          </a>
          </Link>
          </li>
        <li>
        <Link href="/">
            <a>
          Extrato
          </a>
          </Link>
          </li>
        <li>
        <Link href="/">
            <a>
          Transferências
          </a>
          </Link>
          </li>
        <li>
        <Link href="/">
            <a>
          Pagamentos
          </a>
          </Link>
          </li>
        <li>
        <Link href="/">
            <a>
          Cartões
          </a>
          </Link>
          </li>
        <li>
        <Link href="/">
            <a>
          Crédito
          </a>
          </Link>
          </li>



      </ul>
    </MenuContainer>
  )
}
