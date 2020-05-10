import React from 'react'
import dynamic from 'next/dynamic'

const NoSSRComponent = dynamic(() => import('../components/Button'), {
  ssr: false,
})

export default function page2(): JSX.Element {
  return <NoSSRComponent />
}
