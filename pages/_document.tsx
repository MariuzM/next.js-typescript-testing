import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import { css } from '@emotion/core'

const text = css`
  color: blue;
  text-decoration: none;

  a:link,
  a:visited {
    background-color: #f44336;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <body>
          <span css={text}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </span>{' '}
          <span css={text}>
            <Link href="/page1">
              <a>Page 1</a>
            </Link>
          </span>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
