import Jumbotron from '@/src/sections/jumbotron'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Measur</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Jumbotron />
      </main>
    </div>
  )
}

export default Home
