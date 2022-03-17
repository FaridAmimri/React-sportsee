import React from 'react'
import styled from 'styled-components'

const Greetings = styled.h2`
  font-weight: bold;
  font-size: 48px;
  color: #000000;
  margin: 0;
`

const FirstName = styled.span`
  color: #ff0101;
`

const Congratulations = styled.p`
  color: #000000;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 70px;
`

function Welcome({ user }) {
  return (
    <header>
      <Greetings>
        Bonjour <FirstName>{user.firstName}</FirstName>
      </Greetings>
      <Congratulations>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </Congratulations>
    </header>
  )
}

export default Welcome
