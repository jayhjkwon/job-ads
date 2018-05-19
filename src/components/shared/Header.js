import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Logo from './Logo'

export default () => {
  return (
    <HeaderContainer>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>Job ads</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to={'/register-jobs'}>
              <NavItem>Register jobs</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/">
              <span>Jay</span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background: #fff;

  & svg {
    width: 100px;
  }

  & .navbar-nav > li > a {
    line-height: 40px;
  }

  & .navbar-default {
    background: #fff;
    margin: 0;
  }

  & .navbar-default .navbar-nav > li > a {
    color: #333;
    font-weight: 200;
  }

  & .navbar-default .navbar-nav > .active > a,
  & .navbar-default .navbar-nav > .active > a:hover,
  & .navbar-default .navbar-nav > .active > a:focus {
    background: #fff;
    box-shadow: none;
    border-bottom: solid 1px #aaa;
  }

  & .navbar-brand {
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`
