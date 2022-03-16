import styled from 'styled-components'
import User from '../components/user/User'
import Activity from '../components/activity/Activity'
import Average from '../components/average/Average'
import Performance from '../components/performance/Performance'
import Score from '../components/score/Score'

const DashBoard = styled.div`
  width: 1126px;
  height: 779px;
  position: absolute;
  left: 200px;
  top: 130px;
`

const Statistic = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 810px;
  height: 620px;
  margin-top: 30px;
`

function Profile(props) {
  return (
    <>
      <DashBoard className="dashboard">
        <User user={props.data.userInfos} />

        <Statistic className="statistic">
          <Activity />
          <Average />
          <Performance />
          <Score />
        </Statistic>
      </DashBoard>
    </>
  )
}

export default Profile
