import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';


const MenuContainer = styled.nav`
display: flex;
width: 100%;
flex-direction: column;
width: 100%;
color: #f8f8f8;
font-family: sans-serif;
background-color: #242424;
ul{
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  border: solid;
  flex-direction: column;
  li{
    font-weight: bold;
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
          <Link href="/">
            <a>
          Início
          </a>
          </Link>
          </li>
        <li>Extrato</li>
        <li>Transferências</li>
        <li>Pagamentos</li>
        <li>Cartões</li>
        <li>Crédito</li>



      </ul>
    </MenuContainer>
  )
}
