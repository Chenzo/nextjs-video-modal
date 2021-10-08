import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create NextJS Modal And Video</title>
        <meta name="description" content="Simple NextJS Modal and Video example" />
      </Head>

      <main className={styles.main}>
          paragraph and image here.
      </main>

    </div>
  )
}
