import User from '../components/topBar/user/User'
import styled from 'styled-components'

const DashBoard = styled.div`
  width: 1126px;
  height: 779px;
  position: absolute;
  left: 200px;
  margin-top: 20px;
`

function Profile(props) {
  return (
    <>
      <DashBoard className="profile">
        <User user={props.data.userInfos} />
      </DashBoard>
    </>
  )
}

export default Profile
