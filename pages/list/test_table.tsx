import type { NextPage } from 'next'

const Home: NextPage = () => {
  const data = [
    { No: 1, Value: 'Hello' },
    { No: 2, Value: 'World' },
    { No: 3, Value: '□' },
  ]
  const tdList = []
  for (const item of data) {
    tdList.push(
      <tr>
        <td>{item.No}</td>
        <td>{item.Value}</td>
      </tr>
    )
  }

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Tableの動的表示テスト</title>
      </head>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elm, idx) => {
            ;<tr key={`${idx}`}>
              <td>{elm.No}</td>
              <td>{elm.Value}</td>
            </tr>
          })}
          {tdList}
        </tbody>
      </table>
    </html>
  )
}

export default Home
