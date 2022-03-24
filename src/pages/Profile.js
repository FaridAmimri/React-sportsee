/**
 * @function creating profile page with 2 links for Users
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
      <div>
        <Welcome />
      </div>

      <section>
        <article>
          <Activity />
          <Average />
          <Performance />
          <Score />
        </article>

        <div>
          <Nutrients />
        </div>
      </section>
    </main>
  )
}

export default Profile
