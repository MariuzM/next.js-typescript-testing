import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
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
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
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
          </span>{' '}
          <span css={text}>
            <Link href="/page2">
              <a>Page 2</a>
            </Link>
          </span>{' '}
          <span css={text}>
            <Link href="/page3">
              <a>Page 3</a>
            </Link>
          </span>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
