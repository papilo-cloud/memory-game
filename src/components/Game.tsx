import React, { useEffect, useState } from "react"
import { Row } from "./Row";
import { Cell } from "./Cell";
import { Footer } from "./Footer";
import _, { flatten, shuffle } from  'lodash'
import data from '../data/data.json'
import img from '../assets/icons/anchor-solid.svg'

interface gameProps{
    columns: number,
    rows: number
}
export const Game= () => {

    const [gameState, setGameState] = useState('ready')
    const [wrongGuess, setWrongGuess] = useState([])
    const [correcrGuess, setCorrecrGuess] = useState([])
//   let matrix = [], row;
//     for (let r = 0; r < rows; r++) {
//         row = [];
//         for (let c = 0; c < columns; c++) {
//             row.push(`${r}${c}`)
//         }
//         matrix.push(row)
//     }
//     useEffect(() => {
//         setTimeout(() => {
//             setGameState('Memorize')
//         }, 2000);
//         setTimeout(() => {
//             setGameState('Recall')
//         }, 4000);
//     }, [])
//     console.log(matrix)
//     console.log(shuffle(flatten(matrix)))
console.log(data[0])
  return (
    <div className="grid">
        {/* {data.map((mtx, x)=> <img key={x} src={mtx.imgUrl} alt="name" /> )} */}
        {/* <Footer gameState={gameState} /> */}
        <img src={data[2].imgUrl} alt="" />
    </div>
  )
}

