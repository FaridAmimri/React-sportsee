import Navtop from '../navtop/Navtop'
import Navside from '../navside/Navside'
import styled from 'styled-components'

function Navigation() {
  return (
    <>
      <TopBar className="nav-top">
        <Navtop />
      </TopBar>
      <SideBar className="nav-side">
        <Navside />
      </SideBar>
    </>
  )
}

export default Navigation

const TopBar = styled.div`
  display: flex;
  height: 91px;
  min-width: 1440px;
  background-color: #020203;
`

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 117px;
  min-height: 880px;
  position: absolute;
  top: 90px;
  background-color: #020203;
`
