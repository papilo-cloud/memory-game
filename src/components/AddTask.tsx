import React, {useState} from 'react'

export const AddTask = ({handleAddask}: {handleAddask:(val:string) => void}) => {
    const [val, setVal] = useState('')
    function handleSubmit(e: any) {
        e.preventDefault()
        handleAddask(val)
        setVal('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={val}
            onChange={(e) =>setVal(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
