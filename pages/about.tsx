import React from 'react'

const About = ({ name }: { name: string }): JSX.Element => {
  return <h1>This is the page of: {name}</h1>
}

About.getInitialProps = ({ query }) => {
  return { name: query.name }
}

export default About
