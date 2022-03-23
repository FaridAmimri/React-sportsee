/**
 * Rendering component Navtop
 * @returns Navigation bar with link in order to choose a user
 * @link is used to navigate between differents pages
 */

import Logo from '../logo/Logo'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const TopBarUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  width: 85%;
  padding: 0;
  list-style-type: none;
  font-size: 24px;
  font-weight: 500;
  a {
    text-decoration-line: none;
  }
`

const TopBarLi = styled.li`
  color: #ffffff;
`

function Navigation() {
  return (
    <header>
      <Logo />
      <TopBarUl>
        <NavLink to="/">
          <TopBarLi>Accueil</TopBarLi>
        </NavLink>
        <NavLink to="/user/12">
          <TopBarLi>Profil</TopBarLi>
        </NavLink>
        <TopBarLi>Réglage</TopBarLi>
        <TopBarLi>Communauté</TopBarLi>
      </TopBarUl>
    </header>
  )
}

export default Navigation


