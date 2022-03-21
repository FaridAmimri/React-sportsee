import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Model } from '../../models'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'


const TooltipContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 39px;
    height: 25px;
    background-color: #ffffff;
    color: #000000;
    font-size: 8px;
    font-weight: bold;
  `
  const TitleChart = styled.span`
    position: absolute;
    top: 30px;
    left: 30px;
    width: 147px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    z-index: 10;
  `

function Average() {
  const [averageData, setAverageData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    Model.getUserAverage(id).then((res) => {
      setAverageData(res.sessions)
      setIsLoading(false)
    })
  }, [])

  function formatXAxis(value) {
    if (value === 1) return 'L'
    if (value === 2) return 'M'
    if (value === 3) return 'M'
    if (value === 4) return 'J'
    if (value === 5) return 'V'
    if (value === 6) return 'S'
    if (value === 7) return 'D'
    return value
  }

  function CustomTooltip({ active, payload }) {

    if (active && payload && payload.length) {
      return (
        <TooltipContent className="tooltip-content">
          <bold>{`${payload[0].value} min`}</bold>
        </TooltipContent>
      )
    }
    return null
  }

  return (
    <div className='average'>
      <TitleChart>Durée moyenne des sessions</TitleChart>
      {isLoading && <div>...Loading</div>}
      {!isLoading && (
        <LineChart
          width={258}
          height={263}
          data={averageData}
          margin={{ top: 0, right: 15, left: 10, bottom: 15 }}
          background={{ fill: '#red' }}
        >
          <CartesianGrid
            strokeDasharray="4 1 2"
            vertical={false}
            horizontal={false}
          />
          <XAxis
            dataKey="day"
            stroke="#FFFFFF"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#FFFFFF',
              fontSize: 12,
              fontWeight: '500',
            }}
            dx={0}
            dy={10}
            interval="preserveStartEnd"
            tickFormatter={formatXAxis}
          />
          <YAxis
            width={5}
            axisLine={false}
            tick={false}
            domain={['dataMin-10', 'dataMax+40']}
            tickCount={0}
          />
          <Tooltip
            cursor={{
              stroke: 'rgba(0, 0, 0, 0.1)',
              strokeWidth: 79,
            }}
            content={<CustomTooltip />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255,255,255, 0.6)',
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      )}
    </div>
  )
}

export default Average
