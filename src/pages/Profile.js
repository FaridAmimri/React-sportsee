/**
 * @function creating profile page with 2 links for User 12 and User 18
 */

import Welcome from '../components/welcome/Welcome'
import Activity from '../components/activity/Activity'
import Average from '../components/average/Average'
import Performance from '../components/performance/Performance'
import Score from '../components/score/Score'
import Nutrients from '../components/nutrients/Nutrients'

function Profile() {
  return (
    <main>
      <header>
        <Welcome />
      </header>

      <section>
        <article>
          <Activity />
          <Average />
          <Performance />
          <Score />
        </article>

        <aside>
          <Nutrients />
        </aside>
      </section>
    </main>
  )
}

export default Profile
