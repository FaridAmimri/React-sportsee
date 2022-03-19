import { useEffect, useState } from 'react'
import { Model } from '../../models'
import styled from 'styled-components'
import { PieChart, Pie, Cell } from 'recharts'

const TitleChart = styled.span`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 147px;
  color: #20253a;
  font-size: 15px;
  font-weight: bold;
  z-index: 10;
`

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 64px;
  left: 61px;
  width: 159px;
  height: 159px;
  background-color: #ffffff;
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
  font-weight: 600;
  color: #74798c;
  margin: 0;
  text-align: center;
  line-height: 25px;
`

function Score() {
  const [ScoreData, setScoreData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Model.getUserMainData(18).then((res) => {
      setScoreData(res)
      setIsLoading(false)
    })
  }, [])

  const scoreDataModified = [
    {
      name: 'completed',
      value: ScoreData.score * 100,
    },
    {
      name: 'remain',
      value: 100 - ScoreData.score * 100,
    },
  ]

  return (
    <div className="score">
      <TitleChart>Score</TitleChart>
      <ScoreContainer>
        <ScoreResult>{ScoreData.score * 100} %</ScoreResult>
        <ScoreContent>de votre objectif</ScoreContent>
      </ScoreContainer>
      {isLoading && <div>...Loading</div>}
      {!isLoading && (
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
      )}
    </div>
  )
}

export default Score
