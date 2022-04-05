import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Model } from '../models'
import Error404 from './Error404'
import Welcome from '../components/welcome/Welcome'
import Activity from '../components/activity/Activity'
import Average from '../components/average/Average'
import Performance from '../components/performance/Performance'
import Score from '../components/score/Score'
import Nutrients from '../components/nutrients/Nutrients'

function Profile() {
  const [activityData, setActivityData] = useState([])
  const [averageData, setAverageData] = useState([])
  const [performanceData, setPerformanceData] = useState([])
  const [scoreData, setScoreData] = useState()
  const [nutrientsData, setNutrientsData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const { id } = useParams()

  useEffect(() => {
    Promise.all([
      Model.getUserActivity(id).then((res) => {
        setActivityData(res.sessions)
      }),
      Model.getUserAverage(id).then((res) => {
        setAverageData(res.sessions)
      }),
      Model.getUserPerformance(id).then((res) => {
        setPerformanceData(res.data)
      }),
      Model.getUserMainData(id).then((res) => {
        setScoreData(res.score)
        setNutrientsData(res.keyData)
      }),
    ])
      .then(setIsLoading(false))
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }, [id])

  if (error) return <Error404 />

  return (
    <>
      {isLoading && <div>...is loading</div>}
      {!isLoading && (
        <main>
          <div>
            <Welcome />
          </div>

          <section>
            <article>
              <Activity activityData={activityData} />
              <Average averageData={averageData} />
              <Performance performanceData={performanceData} />
              <Score scoreData={scoreData} />
            </article>

            <div>
              <Nutrients nutrientsData={nutrientsData} />
            </div>
          </section>
        </main>
      )}
    </>
  )
}

export default Profile
