import styled from 'styled-components'
import IconRelax from './iconRelax.png'
import IconSwim from './iconSwim.png'
import IconBike from './iconBike.png'
import IconTraining from './iconTraining.png'

const SideBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  height: 316px;
  align-self: center;
`

const SideBarSpan = styled.span`
  color: #ffffff;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  align-self: center;
  font-size: 12px;
  font-weight: bold;
`

function SideBar() {
  return (
    <>
      <SideBarDiv>
        <img src={IconRelax} alt="icon-relaxation" />
        <img src={IconSwim} alt="icon-swimming" />
        <img src={IconBike} alt="icon-cycling" />
        <img src={IconTraining} alt="icon-bodybuilding" />
      </SideBarDiv>
      <SideBarSpan>Copiryght, SportSee 2022</SideBarSpan>
    </>
  )
}

export default SideBar
