import React from 'react'

const About = ({ name }: { name: string }): JSX.Element => {
  console.log(typeof name)

  return <h1>This is the page of: {name}</h1>
}

About.getInitialProps = ({ query }): object => {
  return { name: query.name }
}

export default About
