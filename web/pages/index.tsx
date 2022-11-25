import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import { WelcomeInformation } from '../model/welcomeInformation'
import { MoodGauge } from '../modules/moodGauge'
import styles from '../styles/Home.module.css'

export default function Home({
  welcomeInformation,
}: {
  welcomeInformation: WelcomeInformation
}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{welcomeInformation.title}</h1>
        <p>{welcomeInformation.description}</p>
        <MoodGauge />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const welcomeInformation = await client.fetch(
    `*[_type == "welcomeInformation"][0]`
  )

  return {
    props: {
      welcomeInformation,
    },
  }
}
