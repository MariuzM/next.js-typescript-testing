import React from 'react'
import Layout from './Layout'

export default (): JSX.Element => {
  console.log(Layout)

  return (
    <Layout title="Contact us">
      <div>Contact</div>

      <div className="hello">
        <p>Hello World</p>

        <style jsx>{`
          .hello {
            font: 15px Helvetica, Arial, sans-serif;
            background: #eee;
            padding: 100px;
            text-align: center;
            transition: background 100ms ease-in;
          }
          .hello:hover {
            background: #ccc;
          }
        `}</style>
      </div>
    </Layout>
  )
}
