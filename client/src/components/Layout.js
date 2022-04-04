import React from 'react'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <div>
        <Nav>
            Cars website
        </Nav>
        <Content>
            {children}
        </Content>
    </div>
  )
}

const Nav = styled.div`
    background-color: #232323;
    padding: 1.5em;
    color: white
`

const Content = styled.div`
    padding: 1.5em
`

export default Layout