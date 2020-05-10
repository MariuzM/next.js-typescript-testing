import React from 'react'
import { css } from '@emotion/core'

const button = css`
  width: 200px;
  height: 100px;
  background-color: #232322;
`

console.log(window)

export default function Button(): JSX.Element {
  return (
    <button css={button} type="button">
      Test
    </button>
  )
}
