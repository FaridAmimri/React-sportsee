import { FaCircle } from 'react-icons/fa'
import styled from 'styled-components'

const LegendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  position: absolute;
  top: 1%;
  left: 4%;
`

const LegendContent = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  font-size: 14px;
`

function Legend() {
  return (
    <LegendContainer className="legend-container">
      <p style={{ fontSize: 15, color: '#20253A', fontWeight: 'bolder' }}>Activité quotidienne</p>
      <LegendContent className="legend-aside">
        <p style={{ color: '#74798C' }}>
          <FaCircle style={{ color: '#282D30', fontSize: 8 }} /> Poids (kg)
        </p>
        <p style={{ color: '#74798C' }}>
          <FaCircle style={{ color: '#E60000', fontSize: 8 }} /> Calories brûlées (kCal)
        </p>
      </LegendContent>
    </LegendContainer>
  )
}

export default Legend
