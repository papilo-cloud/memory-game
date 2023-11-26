import React, { useEffect, useState } from "react"
import { Row } from "./Row";
import { Cell } from "./Cell";
import { Footer } from "./Footer";
import _, { flatten, shuffle } from  'lodash'


interface gameProps{
    columns: number,
    rows: number
}
export const Game= ({rows, columns}: gameProps) => {

    const [gameState, setGameState] = useState('ready')
    const [wrongGuess, setWrongGuess] = useState([])
    const [correcrGuess, setCorrecrGuess] = useState([])
  let matrix = [], row;
    for (let r = 0; r < rows; r++) {
        row = [];
        for (let c = 0; c < columns; c++) {
            row.push(`${r}${c}`)
        }
        matrix.push(row)
    }
    useEffect(() => {
        setTimeout(() => {
            setGameState('Memorize')
        }, 2000);
        setTimeout(() => {
            setGameState('Recall')
        }, 4000);
    }, [])
    console.log(matrix)
    console.log(shuffle(flatten(matrix)))
  return (
    <div className="grid">
        {matrix.map((mtx, x)=> <Row key={x}>
            {mtx.map(cellId => <Cell key={cellId} gameState={gameState} id={cellId} />)}
        </Row> )}
        <Footer gameState={gameState} />
    </div>
  )
}

