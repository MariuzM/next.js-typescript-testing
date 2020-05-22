import React from 'react'
import Link from 'next/link'

const posts = {
  page2: {
    id: 1,
    title: 'Blog One',
    content: 'Hey some post content',
  },
  page1: {
    id: 2,
    title: 'Blog Two',
    content: 'Hey this is the second post content',
  },
}

const Blog = (): JSX.Element => (
  <ul>
    {Object.entries(posts).map((value) => {
      return (
        <li key={value[1].id}>
          <Link href="/[id]" as={'/' + value[0]}>
            <a>{value[1].title}</a>
          </Link>
        </li>
      )
    })}
  </ul>
)

export default Blog
