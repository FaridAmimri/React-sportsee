import Logo from '../logo/Logo'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const TopBarUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  width: 80%;
  padding: 0;
  list-style-type: none;
  font-size: 24px;
  font-weight: bold;
`

const TopBarLi = styled.li`
  color: #ffffff;
`

function TopBar() {
  return (
    <>
      <Logo />
      <TopBarUl>
        <TopBarLi>Accueil</TopBarLi>
        <NavLink to="/profile">
          <TopBarLi>Profil</TopBarLi>
        </NavLink>
        <TopBarLi>Réglage</TopBarLi>
        <TopBarLi>Communauté</TopBarLi>
      </TopBarUl>
    </>
  )
}

export default TopBar
