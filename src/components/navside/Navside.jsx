import yoga from './yoga.png'
import swim from './swim.png'
import bike from './bike.png'
import weight from './weight.png'
import styled from 'styled-components'

function SideBar() {
  return (
    <>
      <SideBarDiv>
        <img src={yoga} alt="icon-yoga" />
        <img src={swim} alt="icon-swimming" />
        <img src={bike} alt="icon-cycling" />
        <img src={weight} alt="icon-bodybuilding" />
      </SideBarDiv>
      <SideBarSpan>Copiryght, SportSee 2022</SideBarSpan>
    </>
  )
}

export default SideBar

const SideBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 220px;
  padding: 0;
  height: 316px;
  align-self: center;
`

const SideBarSpan = styled.span`
  position: absolute;
  top: 700px;
  color: #ffffff;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  align-self: center;
  font-size: 12px;
  font-weight: bold;
`
