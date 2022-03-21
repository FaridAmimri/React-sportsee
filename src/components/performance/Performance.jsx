import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Model } from '../../models'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'


function Performance() {
  const [performanceData, setPerformanceData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    Model.getUserPerformance(id).then((res) => {
      setPerformanceData(res.data)
      setIsLoading(false)
    })
  }, [])

  function formatAngleAxis(value) {
    if (value === 1) return 'Intensité'
    if (value === 2) return 'Vitesse'
    if (value === 3) return 'Force'
    if (value === 4) return 'Endurance'
    if (value === 5) return 'Energie'
    if (value === 6) return 'Cardio'
    return value
  }

  return (
    <div className='performance'>
      {isLoading && <div>...Loading</div>}
      {!isLoading && (
        <RadarChart
          outerRadius={90}
          width={258}
          height={263}
          data={performanceData}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFFFFF"
            tickLine={false}
            tickFormatter={formatAngleAxis}
            tick={{
              fontSize: 10,
              fontWeight: 900,
            }}
          />
          <Radar
            dataKey="value"
            fill="#FF0101"
            stroke="transparent"
            fillOpacity={0.7}
          />
        </RadarChart>
      )}
    </div>
  )
}

export default Performance

// {isLoading && <div>...Loading</div>}
//       {!isLoading && (
//         <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
//           <PolarGrid radialLines={false} />
//           <PolarAngleAxis
//             dataKey='kind'
//             stroke="white"
//             tickLine={false}
//             tick={{
//               fontSize: 10,
//               fontWeight: 500,
//             }}
//           />
//           <Radar
//             dataKey='value'
//             fill="#ff0101"
//             stroke="transparent"
//             fillOpacity={0.7}
//           />
//         </RadarChart>
//       )}
