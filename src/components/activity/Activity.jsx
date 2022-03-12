import { useEffect, useState } from 'react'
import { Model } from '../../models'
import Legend from '../legend/Legend'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

function Activity() {
  const [activityData, setActivityData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Model.getUserActivity(18).then((res) => {
      setActivityData(res.sessions)
      setIsLoading(false)
    })
  }, [])

  function formatXAxis(tickItem) {
    return tickItem + 1
  }

  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p> {`${payload[0].value} kg`}</p>
          <p> {`${payload[1].value} kCal`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <>
      {isLoading && <div>...Loading</div>}
      {!isLoading && (
        <BarChart
          width={700}
          height={300}
          data={activityData}
          margin={{ top: 50, right: 50, left: 50, bottom: 30 }}
          barGap={7}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            vertical={false}
            stroke="#dedede"
          />
          <XAxis
            tickFormatter={formatXAxis}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: 14 }}
            padding={{ left: -47, right: -47 }}
            dy={12}
          />
          <YAxis hide={true} yAxisId="left" />
          <YAxis
            axisLine={false}
            yAxisId="right"
            orientation="right"
            tickLine={false}
            domain={['dataMin-1', 'dataMax+1']}
            tickCount={4}
            tickSize="50"
          />
          <Tooltip
            position={{ x: activityData.x + 50, y: activityData.y - 80 }}
            content={<CustomTooltip />}
            cursor={{
              fill: '#C4C4C4',
              fillOpacity: '0.5',
            }}
          />
          <Bar
            dataKey="kilogram"
            barSize={7}
            fill="#282D30"
            radius={[5, 5, 0, 0]}
            yAxisId="right"
            maxBarSize={12}
          />
          <Bar
            dataKey="calories"
            barSize={7}
            fill="#E60000"
            radius={[5, 5, 0, 0]}
            yAxisId="left"
            maxBarSize={12}
          />
          <Legend />
        </BarChart>
      )}
    </>
  )
}

export default Activity
