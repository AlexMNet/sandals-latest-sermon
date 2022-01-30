import Head from 'next/head'
import Header from '../components/index/Header'
import React from 'react'
import Main from '../components/index/Main'

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Sandals Church | Latest Sermon</title>
      </Head>
      <Header />
      <Main data={data} />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://sandalschurch.com/api/latest_sermon')
  const data = await res.json()
  return { props: { data } }
}
