import React from 'react'
import { NextComponentType } from 'next'
import { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

const MyDocument: NextComponentType<Head, Main, NextScript> = () => {
  return (
    <html lang="en">
      <Head>
        <style
          data-emotion-css={this.props.ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: this.props.css }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}

MyDocument.getInitialProps = ({ renderPage }) => {
  const page = renderPage()
  const styles = extractCritical(page.html)
  return { ...page, ...styles }
}

export default MyDocument

// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//     const page = renderPage()
//     const styles = extractCritical(page.html)
//     return { ...page, ...styles }
//   }

//   render(): JSX.Element {
//     return (
//       <html lang="en">
//         <Head>
//           <style
//             data-emotion-css={this.props.ids.join(' ')}
//             dangerouslySetInnerHTML={{ __html: this.props.css }}
//           />
//         </Head>

//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     )
//   }
// }
