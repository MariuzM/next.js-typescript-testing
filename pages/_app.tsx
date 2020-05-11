import React, { ReactType } from 'react'
import Head from 'next/head'

type Prop = {
  Component: ReactType
  pageProps: string
}

export default function App({ Component, pageProps }: Prop): JSX.Element {
  return (
    <div>
      {/* <CacheProvider value={cache}> */}
      <Head>
        <title>Marius.dev</title>
      </Head>

      {/* {globalStyles} */}

      <Component {...pageProps} />
      {/* </CacheProvider> */}
    </div>
  )
}
