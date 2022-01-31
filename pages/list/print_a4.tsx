import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="../css/styled.css" />
        <title>A4 Print Test</title>
      </head>
      <body>
        <section className="page">
          <p className="caption txt__right">2022年2月14日</p>
          <p className="name txt_underline">Example 御中</p>
          <p className="name txt__right">Example Example</p>
          <p className="caption txt__right">
            埼玉県○○市□□区△△△９－９－９
            <br />
            exp担当者
            <br />
            000-0000-0000
          </p>
          <h1 className="txt__center">御請求書</h1>
          <p>××の理由により、下記の通りにご請求申し上げます。</p>
          <dl className="price">
            <dt> ご請求金額 </dt>
            <dd> 10,000円 </dd>
          </dl>
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>品名</th>
                <th>数量</th>
                <th>単価</th>
                <th>合計</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>2</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>3</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>4</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>5</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>6</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>7</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>8</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}></td>
                <th>小計</th>
                <td>10,000円</td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <th>消費税</th>
                <td>10,000円</td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <th>合計</th>
                <td>10,000円</td>
              </tr>
            </tfoot>
          </table>
          <p className="bank">
            銀行名：○○銀行 ○○支店
            <br />
            口座番号：普通 000000
            <br />
            口座名義：〇×□△
          </p>
          <p>以上、よろしくお願い致します。</p>
        </section>
      </body>
    </html>
  )
}

export default Home
