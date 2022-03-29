import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleChart = styled.span`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 147px;
  color: #ffffff;
  opacity: 0.5;
  font-size: 15px;
  font-weight: 500;
  z-index: 10;
`

const LineChartContainer = styled.div`
  position: relative;
  .recharts-surface {
    background-color: #ff0000;
    border-radius: 5px;
  }
`

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

Average.propTypes = {
  averageData: PropTypes.array,
}

function Average({ averageData }) {
  /**
   * @param {number} value
   * @returns {string} corresponding to first letter of weekdays
   */
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

  /**
   * @param {boolean} active
   * @param {array} payload
   */
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
    <LineChartContainer className="average">
      <TitleChart>Durée moyenne des sessions</TitleChart>
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
            opacity: 0.5,
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
    </LineChartContainer>
  )
}

export default Average
