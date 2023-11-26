import { useRef } from "react"

export const Cell = ({id, gameState}:{id: string, gameState:string }) => {

  const btnRef = useRef(null)
  function handleClick(id: string) {
    if (gameState === 'Recall') {
      console.log(id)
    }
  }
  return (
    <div className="cell" >
      <button ref={btnRef} className="disabled" disabled={false} onClick={() =>handleClick(id)}>
        <div className="card-front"></div>
        <div className="card-back">🥔</div>
      </button>
    </div>
  )
}
