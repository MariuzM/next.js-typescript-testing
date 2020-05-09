import React from 'react'

const Page1 = ({ name }: { name: string }): JSX.Element => {
  return <h1>This is the page of: {name}</h1>
}

Page1.getInitialProps = ({ query }): object => {
  return { name: query.name }
}

export default Page1
