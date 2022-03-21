import Logo from '../logo/Logo'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Navtop() {
  return (
    <>
      <Logo />
      <TopBarUl>
        <NavLink to="/">
          <TopBarLi>Accueil</TopBarLi>
        </NavLink>
        <NavLink to="/user">
          <TopBarLi>Profil</TopBarLi>
        </NavLink>
        <TopBarLi>Réglage</TopBarLi>
        <TopBarLi>Communauté</TopBarLi>
      </TopBarUl>
    </>
  )
}

export default Navtop

const TopBarUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  width: 85%;
  padding: 0;
  list-style-type: none;
  font-size: 24px;
  font-weight: bold;
`

const TopBarLi = styled.li`
  color: #ffffff;
`
