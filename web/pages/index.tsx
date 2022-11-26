import client from '../client'
import { WelcomeInformation } from '../models/welcomeInformation'
import { MoodGauge } from '../modules/moodGauge'
import { serverFetch } from '../utils/serverFetch'

export default function Home({
  welcomeInformation,
  prediction,
}: {
  welcomeInformation: WelcomeInformation
  prediction: number
}) {
  return (
    <>
      <MoodGauge mood={prediction} />
      <h1>{welcomeInformation.title}</h1>
      <p>{welcomeInformation.description}</p>
    </>
  )
}

export async function getServerSideProps() {
  const welcomeInformation = await client.fetch(
    `*[_type == "welcomeInformation"][0]`
  )
  const prediction = await serverFetch('/api/predictedMood').then((res) =>
    res.json()
  )

  return {
    props: {
      welcomeInformation,
      prediction,
    },
  }
}
