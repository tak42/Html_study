import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
  padding: 0 0.5rem;
  background-color: green;
`

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`

const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  line-height: 1.15;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
`

const Code = styled.code`
  padding: 0.75rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  font-size: 1.1rem;
  background: #fafafa;
  border-radius: 5px;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`
const Block = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid white;
`

const Stone = styled.div<{ val: number }>`
  background-color: ${(props) => (props.val === 1 ? 'white' : 'black')};
  width: 100px;
  height: 60px;
  border-radius: 50%;
  margin: 1rem;
`

const Card = styled.a`
  width: 45%;
  padding: 1.5rem;
  margin: 1rem;
  color: inherit;
  text-align: left;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;

  a {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`

const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`
const Home: NextPage = () => {
  // prettier-ignore
  const [board, setBoard] = useState([
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,2,0,0,0],
    [0,0,0,2,1,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
  ])
  const [turnColor, setTurnColor] = useState(1)

  const onClick = (x: number, y: number) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board)) // boardを直接書き換えないようにコピー作成
    newBoard[x][y] = turnColor
    const setColorNumber: number = turnColor === 1 ? 2 : 1
    setTurnColor(setColorNumber)
    setBoard(newBoard) // boardに変更を反映
  }
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>{turnColor === 1 ? '白の番です。' : '黒の番です。'}</h1>
        <Grid>
          {board.map((row, x) =>
            row.map((color, y) => (
              <Block key={`${x}-${y}`} onClick={() => onClick(x, y)}>
                {/* {x}, {y} */}
                {color > 0 && <Stone val={color} />}
              </Block>
            ))
          )}
        </Grid>
      </Main>
    </Container>
  )
}

export default Home
