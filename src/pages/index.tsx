import React from 'react'
import { Basic, Combined, Animated, bounce } from '../styles/styles'
import { css } from '@emotion/core'

const test = css`
  color: blue;
  font-size: 30px !important;
`

const test2 = {
  name: 'marius',
  date: 22,
}

console.log('sds')

const Home = (): JSX.Element => {
  return (
    <>
      <h1 css={test}>Home Page</h1>

      <Basic>Cool Styles</Basic>

      <Combined>
        With <code>:hover</code>.
      </Combined>

      <Animated animation={bounce}>Let&apos;s bounce.</Animated>
    </>
  )
}

export default Home
