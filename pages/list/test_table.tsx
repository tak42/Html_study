import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => {
  const data = [
    { No: 1, Value: 'Hello' },
    { No: 2, Value: 'World' },
    { No: 3, Value: '□' },
  ]
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>対象者一覧表</title>
      </head>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(elm => {
              return <tr><td>{elm.No}</td><td>{elm.Value}</td></tr>
            })
          }
        </tbody>
      </table>
    </html>
  )
}

export default Home
