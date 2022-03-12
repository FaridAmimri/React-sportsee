import User from '../components/user/User'
import styled from 'styled-components'
import Activity from '../components/activity/Activity'
import Average from '../components/average/Average'
import Performance from '../components/performance/Performance'

const DashBoard = styled.div`
  width: 1126px;
  height: 779px;
  position: absolute;
  left: 200px;
  margin-top: 20px;
`

const Statistic = styled.div`
  margin-top: 30px;
`

function Profile(props) {
  return (
    <>
      <DashBoard className="dashboard">
        <User user={props.data.userInfos} />
        <Activity />
        <Statistic className="statistic">
          <Average />
          <Performance />
        </Statistic>
      </DashBoard>
    </>
  )
}

export default Profile
