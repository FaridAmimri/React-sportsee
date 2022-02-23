import LogoSportsee from './logo.png'
import styled from 'styled-components'

const LogoImg = styled.img`
  font-size: small;
`

function Logo() {
  return (
    <div className="logo">
      <LogoImg src={LogoSportsee} alt="logo-sportsee" />
    </div>
  )
}

export default Logo
