import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'

function Activity() {
  const [activityData, setWeightData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/user/18/activity')
      .then((res) => res.json())
      .then((res) => {
        setWeightData(res.data.sessions)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {isLoading && <div>...Loading</div>}
      {!isLoading && (
        <BarChart
          width={700}
          height={300}
          data={activityData}
          margin={{top: 40, right: 0, left: 0, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis axisLine={false} orientation='right' />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      )}
    </>
  )
}

export default Activity
