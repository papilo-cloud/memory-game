import React from 'react'

export const MultiPlayer = () => {
  return (
        <div className="end-cont">
            <div className="txt">
                <h2>Player 2 Wins!</h2>
                <p>Game over! Here's are the results...</p>
            </div>
            <div className="mesg">
                <div className="time">
                    <p>Player 2(Winner)</p>
                    <h3>4 Pairs</h3>
                </div>
                <div className="time">
                    <p>Player 1</p>
                    <h3>2 Pairs</h3>
                </div>
                <div className="time">
                    <p>Player 3</p>
                    <h3>1 Pairs</h3>
                </div>
                <div className="time">
                    <p>Player 4</p>
                    <h3>1 Pairs</h3>
                </div>
            </div>
            <div className="btn">
                <button className="restart">
                    Restart
                </button>
                <button>Setup New Game</button>
            </div>
        </div>
  )
}
