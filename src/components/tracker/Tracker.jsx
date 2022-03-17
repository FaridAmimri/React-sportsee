import styled from 'styled-components'


const TrackerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 258px;
  height: 124px;
  background-color: #fbfbfb;
  border-radius: 5px;
  padding-left: 40px;
`

const TrackerImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`

const TrackerCount = styled.div`
  display: flex;
  flex-direction: column;
`

const TrackerValue = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #282D30;
`

const TrackerUnity = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #74798C;
`

function Tracker({ children, unity }) {
  return (
    <TrackerContainer>
      <TrackerImg></TrackerImg>
      <TrackerCount>
        <TrackerValue>{children}</TrackerValue>
        <TrackerUnity>{unity}</TrackerUnity>
      </TrackerCount>
    </TrackerContainer>
  )
}

export default Tracker
