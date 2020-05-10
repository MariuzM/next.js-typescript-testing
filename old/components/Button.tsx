import React, { useEffect } from 'react'
import { css } from '@emotion/core'

const button = css`
  font-size: 2rem;
  color: white;
  width: 200px;
  height: 100px;
  background-color: #843fc4d8;
  cursor: pointer;
  border: 0;
  outline: 0;
  border-radius: 20px 50px;
  filter: drop-shadow(0 0 3px #843fc4d8);
`

const click = (): void => console.log(window)

export default function Button(): JSX.Element {
  return (
    <button css={button} onClick={click} type="button">
      Test
    </button>
  )
}
