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
    width: 1700px;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    line-height: 1.5em;
    counter-reset: sheet;
  }
  /* プレビュー用のスタイル */
  @media screen {
    body {
      background: #eee;
    }
  }
`

const Sectionpage = styled.section`
  width: 1700px; /* 用紙の横幅を改めて指定 */
  height: 1100px; /* 高さには0.5mm余裕を持たせる */
  box-sizing: border-box;
  page-break-after: always; /* 改ページを行う */
  padding: 30px 40px;
  font-size: 20pt;
  ::after {
    position: absolute;
    bottom: 10px;
    right: 10px;
    counter-increment: sheet;
    content: counter(sheet) 'ページ ';
  }

  /* プレビュー用のスタイル */
  @media screen {
    size: a4 landscope;
    background: white; /* 背景を白く */
    box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3); /* ドロップシャドウ */
    margin: 5mm;
  }
  p {
    font-size: 20px;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  td {
    width: 550px;
  }
`
const Header = styled.div`
  margin-bottom: 1rem;
  td {
    :nth-child(1) {
      width: 700px;
    }
    :nth-child(2) {
      width: 500px;
    }
    :nth-child(3) {
      padding-left: 50px;
    }
  }
`

const Organization = styled.span`
  table {
    font-size: 25px;
    text-align: left;
  }
  td {
    padding-bottom: 1rem;
    :nth-child(1) {
      width: 150px;
    }
    :nth-child(2) {
      width: 500px;
    }
  }
`

const RemoteDest = styled.span`
  table {
    border-spacing: 0;
    border-top: solid 1px #000;
    border-left: solid 1px #000;
    border-bottom: solid 1px #000;
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
    height: 60px;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    font-size: 20px;
    width: 200px;
    text-align: center;
    :last-child {
      /* border-right: 0; */
      border-bottom: 0;
    }
    :nth-child(1) {
      width: 300px;
    }
    :nth-child(2) {
      width: 120px;
    }
  }
`

const TargetlistID = styled.span`
  table {
    text-align: right;
    border-spacing: 0;
    border-top: solid 1px #000;
    border-left: solid 1px #000;
    border-bottom: solid 1px #000;
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
    height: 60px;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    font-size: 18px;
    width: 200px;
    text-align: center;
    :last-child {
      /* border-right: 0; */
      border-bottom: 0;
    }
    :nth-child(1) {
      width: 300px;
    }
    :nth-child(2) {
      width: 120px;
    }
  }
  .title {
    font-size: 20px;
  }
`

const TargetlistData = styled.div`
  width: 1700px;
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
    height: 80px;
    text-align: center;
    margin: 0;
    padding: 0.5rem;
    :last-child {
      border-right: 0;
    }
    :nth-child(1) {
      width: 30px;
    }
    :nth-child(2) {
      width: 100px;
    }
    :nth-child(3) {
      width: 150px;
    }
    :nth-child(4) {
      width: 475px;
    }
    :nth-child(5) {
      width: 80px;
    }
    :nth-child(6) {
      width: 475px;
    }
    :nth-child(7) {
      width: 80px;
    }
    :nth-child(8) {
      width: 100px;
    }
    :nth-child(9) {
      width: 80px;
    }
  }
`

const Table = () => {
  const tbody = []
  for (let i = 0; i < 5; i++) {
    tbody.push(
      <tr key={i}>
        <td>{i}行目</td>
        <td>眠い眠い</td>
      </tr>
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>行数</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody>{tbody}</tbody>
    </table>
  )
}
const TableList = () => {
  const tbodyList = []
  for (let i = 0; i < 5; i++) {
    tbodyList.push(
      <tr key={i}>
        <td>{i}行目</td>
        <td>眠い眠い</td>
      </tr>
    )
  }
}
const Home: NextPage = () => {
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
            <th>行数</th>
            <th>状態</th>
          </tr>
        </thead>
        <tbody>{TableList}</tbody>
      </table>
    </html>
  )
  // return (
  //   <Printcontents lang="ja">
  //     <head>
  //       <meta charSet="utf-8" />
  //       <meta name="viewport" content="width=device-width" />
  //       <title>対象者一覧表</title>
  //     </head>
  //     <body>
  //       <table id="test_table">
  //         <tbody>
  //           <tr>
  //             <td></td><td></td><td></td>
  //           </tr>
  //           <tr>
  //             <td></td><td></td><td></td>
  //           </tr>
  //           <tr>
  //             <td></td><td></td><td></td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </body>
  //   </Printcontents>
  // )
}

export default Home
