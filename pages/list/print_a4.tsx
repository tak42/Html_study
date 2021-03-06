import type { NextPage } from 'next'
import styled from 'styled-components'

const Printcontents = styled.html`
  @page {
    size: a4 portrait; /* 横の場合はlandscope */
    margin: 0; /* chromeの印刷用ヘッダーとフッターを排除 */
  }

  /* 各要素の余白リセット */
  * {
    padding: 0;
    margin: 0;
  }

  body {
    width: 210mm;
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
  width: 210mm; /* 用紙の横幅を改めて指定 */
  height: 295mm; /* 高さには0.5mm余裕を持たせる */
  box-sizing: border-box;
  page-break-after: always; /* 改ページを行う */
  padding: 20mm 25mm;
  font-size: 11pt;

  /* プレビュー用のスタイル */
  @media screen {
    background: white; /* 背景を白く */
    box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3); /* ドロップシャドウ */
    margin: 5mm;
  }
`

const Caption = styled.p`
  font-size: 9pt;
  text-align: right;
`

const Destname = styled.p`
  text-decoration: underline;
  font-size: 12pt;
`

const Title = styled.h1`
  text-align: center;
  margin: 1em 0;
  font-size: 16pt;
  letter-spacing: 0.2em;
`

const Price = styled.dl`
  display: flex;
  max-width: 60%;
  margin: 1em 0 2em;
  font-size: 14pt;
  border: solid 0.5pt #000;
`

const Pricedt = styled.dt`
  padding: 1em;
  border-right: solid 0.5pt #000;
`

const Pricedd = styled.dd`
  padding: 1em;
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.1em;
    border: solid 0.5pt #000;
  }

  thead,
  tfoot th {
    background: #ccc;
  }

  tfoot td:empty {
    border: none;
  }
`

const No = styled.th`
  width: 30px;
`
const Num = styled.th`
  width: 50px;
`
const Cost = styled.th`
  width: 100px;
`
const Sum = styled.th`
  width: 150px;
`

const Bank = styled.p`
  margin-bottom: 1em;
`
const Home: NextPage = () => {
  return (
    <Printcontents lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>A4 Print Test</title>
      </head>
      <body>
        <Sectionpage>
          <Caption>2022年2月14日</Caption>
          <Destname>Example 御中</Destname>
          <Caption>Example Example</Caption>
          <Caption>
            埼玉県○○市□□区△△△９－９－９
            <br />
            exp担当者
            <br />
            000-0000-0000
          </Caption>
          <Title>御請求書</Title>
          <p>××の理由により、下記の通りにご請求申し上げます。</p>
          <Price>
            <Pricedt> ご請求金額 </Pricedt>
            <Pricedd> 10,000円 </Pricedd>
          </Price>
          <Table>
            <thead>
              <tr>
                <No>NO</No>
                <th>品名</th>
                <Num>数量</Num>
                <Cost>単価</Cost>
                <Sum>合計</Sum>
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
          </Table>
          <Bank>
            銀行名：○○銀行 ○○支店
            <br />
            口座番号：普通 000000
            <br />
            口座名義：〇×□△
          </Bank>
          <p>以上、よろしくお願い致します。</p>
        </Sectionpage>
      </body>
    </Printcontents>
  )
}

export default Home
