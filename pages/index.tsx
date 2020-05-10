import React, { useEffect } from 'react'
import { Basic, Combined, Animated, bounce } from '../shared/styles'
import { css, jsx } from '@emotion/core'

const test = css`
  color: blue;
  font-size: 30px !important;
`

const Home = (): JSX.Element => {
  useEffect(() => {
    console.log(window)
  }, [])

  return (
    <div>
      <h1 css={test}>Home Page</h1>

      <Basic>Cool Styles</Basic>

      <Combined>
        With <code>:hover</code>.
      </Combined>

      <Animated animation={bounce}>Let&apos;s bounce.</Animated>
    </div>
  )
}

export default Home
