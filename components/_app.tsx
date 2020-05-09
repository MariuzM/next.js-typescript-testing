import React from 'react'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { globalStyles } from '../shared/styles'

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  )
}
