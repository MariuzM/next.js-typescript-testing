import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const NoSSRComponent = dynamic(() => import('../components/Button'), {
  ssr: false,
})

export default function page2(): JSX.Element {
  const [count, setCount] = useState(5)

  useEffect(() => {
    console.log(count)
  }, [])

  return (
    <>
      <div>This is NoSSRComponent</div>
      <NoSSRComponent />
    </>
  )
}
