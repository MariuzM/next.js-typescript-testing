import React, { ReactType } from 'react'
import Head from 'next/head'

export default function App({
  Component,
  pageProps,
}: {
  Component: ReactType
  pageProps: string
}): JSX.Element {
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
