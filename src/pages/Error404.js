import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 7vw;
  color: #ff0101;
  span {
    font-size: 200px;
  }
  p {
    font-size: 25px;
  }
  a {
    font-size: 18px;
    margin-top: 7vw;
    color: #ff0101;
  }
`

function Error404() {
  return (
    <main>
      <ErrorPage className="error">
        <span>404</span>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </ErrorPage>
    </main>
  )
}

export default Error404
