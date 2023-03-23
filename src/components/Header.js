import React, { useState } from 'react'
import styled from 'styled-components'



function Header() {

  return (
    <Container>
      <a>
        <img src='/images/logo.svg'/>
      </a>

      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>

     

   
    </Container>
  )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    padding: 0 20px;
    display: flex;
 
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    

  
        a {
            font-weight:600;
        }

    

`


const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    flex:1;
    

    a{
        font-weight: 600;
        text-transformation: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display:none;
    }

`





