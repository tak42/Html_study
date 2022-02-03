import type { NextPage } from 'next'
import styled from 'styled-components'

const Printcontents = styled.html`
  @page {
    size: a4 landscope; /* 横の場合はlandscope */
    margin: 0; /* chromeの印刷用ヘッダーとフッターを排除 */
  }

  /* 各要素の余白リセット */
  * {
    padding: 0;
    margin: 0;
  }

  body {
    width: 1500px;
    background: #eee;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    line-height: 1.5em;
  }
  /* プレビュー用のスタイル */
  @media screen {
    body {
      background: #eee;
    }
  }
`

const Sectionpage = styled.section`
  width: 1500px; /* 用紙の横幅を改めて指定 */
  height: 1000px; /* 高さには0.5mm余裕を持たせる */
  box-sizing: border-box;
  page-break-after: always; /* 改ページを行う */
  padding: 30px 40px;
  font-size: 20pt;

  /* プレビュー用のスタイル */
  @media screen {
    background: white; /* 背景を白く */
    box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3); /* ドロップシャドウ */
    margin: 5mm;
  }

  td {
    width: 500px;
  }
`

const Organization = styled.span`
  width: 100px;
  height: 50px;
`

const RemoteDest = styled.span`
  table {
    border-spacing: 0;
    border: solid 1px #000;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th,
  td {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    font-size: 20px;
    width: 200px;
    text-align: center;
    :last-child {
      border-right: 0;
    }
  }
`

const TargetlistID = styled.span`
  table {
    border-spacing: 0;
    border: solid 1px #000;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th,
  td {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    font-size: 20px;
    width: 200px;
    text-align: center;
    :last-child {
      border-right: 0;
    }
  }
`

const TargetlistData = styled.div`
  width: 1400px;
  height: 900px;
  margin-top: 16px;
  table {
    border-spacing: 0;
    border: solid 1px #000;
    box-sizing: border-box;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th,
  td {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    font-size: 20px;
    width: 200px;
    text-align: center;
    margin: 0;
    padding: 0.5rem;
    :last-child {
      border-right: 0;
    }
    :nth-child(1) {
      width: 30px;
    }
  }
`
const Home: NextPage = () => {
  return (
    <Printcontents lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>対象者一覧表</title>
      </head>
      <body>
        <Sectionpage>
          <table>
            <tr>
              <td>
                <Organization>
                  <p>自治体名： 東京都富士区(131240)</p>
                  <p>事業者名： TEST株式会社(009999)</p>
                </Organization>
              </td>
              <td>
                <RemoteDest>
                  <table>
                    <tr>
                      <td>リモートアクセス先</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>255.255.255.192</td>
                      <td rowSpan={2}>QR</td>
                    </tr>
                  </table>
                </RemoteDest>
              </td>
              <td>
                <TargetlistID>
                  <table>
                    <tr>
                      <td>対象者一覧ID</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>10-131240-009999-0000000001</td>
                      <td rowSpan={2}>QR</td>
                    </tr>
                  </table>
                </TargetlistID>
              </td>
            </tr>
          </table>
          <TargetlistData>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>出力回数</th>
                  <th>氏名</th>
                  <th>住所</th>
                  <th>生年月日</th>
                  <th>ファイル名</th>
                  <th>不見当</th>
                  <th>差戻廃棄</th>
                  <th>交付</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td>富士 三郎</td>
                  <td>東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２</td>
                  <td>19991111</td>
                  <td>9000000003_009999_0000000323_131240.pdf</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>□</td>
                  <td>□</td>
                  <td>□</td>
                </tr>
              </tbody>
            </table>
          </TargetlistData>
        </Sectionpage>
      </body>
    </Printcontents>
  )
}

export default Home
