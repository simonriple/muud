import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { IMood } from '../models/mood'
import { MoodDiagram } from '../modules/moodDiagram'
import { serverFetch } from '../utils/serverFetch'

function Moods({ moods }: { moods: IMood[] }) {
  const data = moods.map((mood) => ({
    value: mood.mood,
  }))
  return (
    <>
      <h1>My moods</h1>
      <MoodDiagram data={data} />
    </>
  )
}
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const moods = await serverFetch(`/api/mood`, context).then((res) =>
      res.json()
    )
    return {
      props: {
        moods,
      },
    }
  },
})

export default withPageAuthRequired(Moods)
