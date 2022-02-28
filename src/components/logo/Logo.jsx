import LogoSportsee from './logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  align-self: center;
  padding-left: 32px;
`

const LogoImg = styled.img`
  width: 178px;
  height: 60px;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={LogoSportsee} alt="logo-sportsee" />
    </LogoContainer>
  )
}

export default Logo
