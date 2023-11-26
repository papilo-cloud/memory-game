import React from 'react'

interface hintProps {
    ready: string
    memorize: string,
    recall: string
}
export const Footer = ({gameState}: {gameState: string}) => {
    // let hints: hintProps[] = {
    //     1: "Get Ready",
    //     2: "Memorize",
    //     3: "Recall"
    //     }
    //    console.log(hints[gameState])
      //  console.log(gameState)
  return (
    <div className='hint'>
        {gameState}
    </div>
  )
}

Footer.defaultProps = {
     hints: {
            ready: "Get Ready",
            memorize: "Memorize",
            recall: "Recall",
            won: "Well Played",
            lost: "Game Over"
        }
}