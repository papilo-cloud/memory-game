import React, {useState,useContext} from 'react'
import { useTasks } from '../hooks/useContext'

export const AddTask = () => {
    const [val, setVal] = useState('')
    const {handleAddTask} = useTasks()
    function handleSubmit(e: any) {
        e.preventDefault()
        handleAddTask(val)
        setVal('')
    }
    console.log(handleAddTask)
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
