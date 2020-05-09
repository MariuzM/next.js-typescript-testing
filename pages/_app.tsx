import React from 'react'
// import { CacheProvider } from '@emotion/core'
// import { cache } from 'emotion'
// import { globalStyles } from '../shared/styles'
import Head from 'next/head'

export default function App({
  Component,
  pageProps,
}: {
  Component: any
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
