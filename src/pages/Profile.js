import Welcome from '../components/welcome/Welcome'
import Activity from '../components/activity/Activity'
import Average from '../components/average/Average'
import Performance from '../components/performance/Performance'
import Score from '../components/score/Score'
import Nutrients from '../components/nutrients/Nutrients'

function Profile(props) {
  return (
    <main>
      <header>
        <Welcome user={props.data.userInfos} />
      </header>

      <section>
        <article>
          <Activity />
          <Average />
          <Performance />
          <Score />
        </article>

        <aside>
          <Nutrients count={props.data.keyData} />
        </aside>
      </section>
    </main>
  )
}

export default Profile
