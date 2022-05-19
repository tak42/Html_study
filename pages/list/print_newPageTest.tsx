import type { NextPage } from 'next'
import { useMemo } from 'react'
import styled from 'styled-components'

const Printcontents = styled.html`
  @page {
    size: A4;
    /* size: 210mm 297mm; */
    margin: 0; /* chromeの印刷用ヘッダーとフッターを排除 */
  }
  body {
    margin: 0;
    .sheet {
      width: 210mm;
      height: 297mm;
    }
  }
  .sheet {
    border: 1px solid;
    margin: 0;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    page-break-after: always;
  }
  /* プレビュー用のスタイル */
  @media screen {
    body {
      background: #e0e0e0;
    }
    .sheet {
      background: white; /* 背景を白く */
      box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3); /* ドロップシャドウ */
      margin: 5mm;
    }
  }
  @media print {
    width: 210mm;
  }
`

const Sectionpage = styled.section``
const Header = styled.div``

const Organization = styled.span``

const RemoteAndTid = styled.span``

const TargetlistData = styled.div``
const Home: NextPage = () => {
  const rowCnt = 10
  const jDt = { name: '東京都富士区', code: '131240' }
  const cDt = { name: 'TEST株式会社', code: '009999' }
  const tId = '10-131240-009999-0000000001'
  // prettier-ignore
  const data = [
    { 'No': 1, 'Cnt': '', 'Nm': '富士太郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 2, 'Cnt': '', 'Nm': '富士次郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 3, 'Cnt': '', 'Nm': '富士三郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 4, 'Cnt': '', 'Nm': '富士四郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 5, 'Cnt': '', 'Nm': '富士五郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 6, 'Cnt': '', 'Nm': '富士六郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 7, 'Cnt': '', 'Nm': '富士七郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 8, 'Cnt': '', 'Nm': '富士八郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 9, 'Cnt': '', 'Nm': '富士九郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 10, 'Cnt': '', 'Nm': '富士十郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 11, 'Cnt': '', 'Nm': '富士十郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 12, 'Cnt': '', 'Nm': '富士十郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' },
    { 'No': 13, 'Cnt': '', 'Nm': '富士十郎', 'address': '東京都富士区東町９４４－２ 富士ハイツポートアイランド２０２', 'BirthD': '19900101', 'FlNm': '9000000003_009999_0000000323_131240.pdf', 'Mk1': '□', 'Mk2': '□', 'Mk3': '□' }
  ]
  // prettier-ignore
  const thList = ['No', '出力回数', '氏名', '住所', '生年月日', 'ファイル名', '不見当', '差戻廃棄', '交付']

  // prettier-ignore
  const Org = ['自治体名：,' + jDt.name + '(' + jDt.code + ')', '事業者名：,' + cDt.name + '(' + cDt.code + ')']
  const RemoteAndtId = [
    { title: 'リモートアクセス先', qr: 'QR', value: '255.255.255.192' },
    { title: '対象者一覧ID', qr: 'QR', value: tId },
  ]

  type D<T extends Record<never, never>> = T

  // prettier-ignore
  type listDt = D<{ No: number, Cnt: string, Nm: string, address: string, BirthD: string, FlNm: string, Mk1: string, Mk2: string, Mk3: string }[][]>

  const SectionCnt: number = useMemo(() => {
    let cnt = 0
    let dtLen = data.length
    for (let i = 0; dtLen > 0; i++) {
      dtLen = dtLen - rowCnt
      cnt += 1
    }
    return cnt
  }, [data])

  const printList: listDt = useMemo(() => {
    const rtnList: listDt = [
      [{ No: 1, Cnt: '', Nm: '', address: '', BirthD: '', FlNm: '', Mk1: '', Mk2: '', Mk3: '' }],
    ]
    for (let i = 1; i <= SectionCnt; i++) {
      rtnList[i - 1] = data.filter((elm, idx) => idx < i * rowCnt && idx >= (i - 1) * rowCnt)
    }
    return rtnList
  }, [data])

  const SectionList = printList.map((list, idx) => {
    return (
      <Sectionpage className="sheet" key={idx}>
        <p>対象者一覧表</p>
        <Header>
          <table>
            <tr>
              <td>
                <Organization>
                  <table>
                    {Org.map((elm, idx) => (
                      <tr key={idx}>
                        {elm.split(',').map((x, idx) => (
                          <td key={idx}>
                            <h4>{x}</h4>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </table>
                </Organization>
              </td>
              {RemoteAndtId.map((elm, idx) => (
                <td key={idx}>
                  <RemoteAndTid>
                    <table>
                      <tbody>
                        <tr>
                          <th className="title">{elm.title}</th>
                          <td rowSpan={2}>{elm.qr}</td>
                        </tr>
                        <tr>
                          <th>{elm.value}</th>
                        </tr>
                      </tbody>
                    </table>
                  </RemoteAndTid>
                </td>
              ))}
            </tr>
          </table>
        </Header>
        <TargetlistData>
          <table>
            <thead>
              {
                <tr>
                  {thList.map((elm, idx) => (
                    <th key={idx}>{elm}</th>
                  ))}
                </tr>
              }
            </thead>
            <tbody>
              {list.map((elm, idx) => {
                return (
                  <tr key={idx}>
                    {Object.keys(elm).map((x, idx) => {
                      return <td key={idx}>{elm[x as keyof typeof elm]}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </TargetlistData>
        <div className="page">
          <label>{idx + 1}ページ</label>
        </div>
      </Sectionpage>
    )
  })
  return (
    <Printcontents lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>対象者一覧表</title>
        <style>@page {}</style>
      </head>
      <body>{SectionList}</body>
    </Printcontents>
  )
}

export default Home
