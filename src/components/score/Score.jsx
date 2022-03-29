import { PieChart, Pie, Cell } from 'recharts'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleChart = styled.span`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 147px;
  color: #20253a;
  font-size: 15px;
  font-weight: 500;
  z-index: 10;
`

const ScoreContainer = styled.div`
  position: relative;
  .recharts-surface {
    background-color: #fbfbfb;
    border-radius: 5px;
  }
`

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 63px;
  left: 58px;
  width: 159px;
  height: 159px;
  background-color: green;
  border-radius: 100%;
  color: #20253a;
  z-index: 10;
`

const ScoreResult = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: #282d30;
  margin: 0;
`

const ScoreContent = styled.p`
  width: 95px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  color: #74798c;
  margin: 0;
  text-align: center;
  line-height: 25px;
`

Score.propTypes = {
  scoreData: PropTypes.number,
}

function Score({ scoreData }) {
  const scoreDataModified = [
    {
      name: 'completed',
      value: scoreData * 100,
    },
    {
      name: 'remain',
      value: 100 - scoreData * 100,
    },
  ]

  return (
    <ScoreContainer className="score">
      <TitleChart>Score</TitleChart>
      <ScoreWrapper>
        <ScoreResult>{scoreData * 100} %</ScoreResult>
        <ScoreContent>de votre objectif</ScoreContent>
      </ScoreWrapper>
      <PieChart width={258} height={263}>
        <Pie
          data={scoreDataModified}
          dataKey="value"
          fill="#FF0000"
          innerRadius={68}
          outerRadius={80}
          startAngle={80}
          endAngle={480}
        >
          {scoreDataModified.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === 0 ? '#FF0000' : 'none'}
              cornerRadius="40%"
            />
          ))}
        </Pie>
      </PieChart>
    </ScoreContainer>
  )
}

export default Score
