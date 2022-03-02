import React from 'react'
import styled from 'styled-components'

const Greetings = styled.h2`
  font-weight: bold;
  font-size: 48px;
  color: #000000;
`

const FirstName = styled.span`
  color: #ff0101;
`

const Congratulations = styled.p`
  color: #000000;
  font-weight: bold;
  font-size: 18px;
`

function User({ user }) {
  return (
    <>
      <div className="user-name">
        <Greetings>
          Bonjour <FirstName>{user.firstName}</FirstName>
        </Greetings>
        <Congratulations>
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </Congratulations>
      </div>
    </>
  )
}

export default User
