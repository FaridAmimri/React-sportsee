import styled from 'styled-components'
import Tracker from '../tracker/Tracker'
import calorie from './calories.png'

const NutrientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 370px;
  height: 590px;
`

function Nutrients({count}) {

  return (
    <NutrientsContainer>
      <Tracker unity="Calories">
        {<span>{count.calorieCount} kCal</span>}
      </Tracker>

      <Tracker unity="Proteines">
        {<span>{count.proteinCount} g</span>}
      </Tracker>

      <Tracker unity="Glucides">
        {<span>{count.carbohydrateCount} g</span>}
      </Tracker>

      <Tracker unity="Lipides">
        {<span>{count.lipidCount} g</span>}
      </Tracker>
    </NutrientsContainer>
  )
}

export default Nutrients
