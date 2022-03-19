import styled from 'styled-components'
import Tracker from '../tracker/Tracker'

const icons = [
  {
    index: 0,
    iconCalories: './calorie.png',
  },
  {
    index: 1,
    iconProtein: './protein.png',
  },
  {
    index: 2,
    iconCarbs: './carbs.png',
  },
  {
    index: 3,
    iconFat: './fat.png',
  },
]

console.log(icons[0].iconCalories)

const NutrientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 370px;
  height: 600px;
`

function Nutrients({ count }) {
  return (
    <NutrientsContainer>
      <Tracker unity="Calories">
        {/* <TrackerImg src={calorie} alt='icon-calories'></TrackerImg> */}
        {<span>{count.calorieCount} kCal</span>}
      </Tracker>

      <Tracker unity="Proteines">{<span>{count.proteinCount} g</span>}</Tracker>

      <Tracker unity="Glucides">
        {<span>{count.carbohydrateCount} g</span>}
      </Tracker>

      <Tracker unity="Lipides">{<span>{count.lipidCount} g</span>}</Tracker>
    </NutrientsContainer>
  )
}

export default Nutrients

// image={icons[0].iconCalories}
