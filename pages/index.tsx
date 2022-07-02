import Jumbotron from '@/src/sections/jumbotron'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Measur</title>
        <meta name="description" content="Here at measur we are driven by fashion and technology. ✌️" />
      </Head>

      <main>
        <Jumbotron />
      </main>
    </div>
  )
}

export default Home
