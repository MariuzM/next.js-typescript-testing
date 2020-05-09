import React from 'react'
import { Basic, Combined, Animated, bounce } from '../shared/styles'

const Home: React.FC = (): JSX.Element => (
  <div>
    <h1>Home Page</h1>

    <Basic>Cool Styles</Basic>

    <Combined>
      With <code>:hover</code>.
    </Combined>

    <Animated animation={bounce}>Let&apos;s bounce.</Animated>
  </div>
)

export default Home
