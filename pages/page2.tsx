import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter, NextRouter } from 'next/router'

const NoSSRComponent = dynamic(() => import('../components/Button'), {
  ssr: false,
})

const posts = {
  page2: {
    id: 1,
    title: 'test post',
    content: 'Hey some post content',
  },
  second: {
    id: 2,
    title: 'second post',
    content: 'Hey this is the second post content',
  },
}

export default function page2(): JSX.Element {
  const router: NextRouter = useRouter()
  // const post = posts[router.query.id]

  console.log(router.query)

  return <NoSSRComponent />
}
