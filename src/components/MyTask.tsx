import React from 'react'
import { useTasks } from '../hooks/useContext'

// type taskProps = {
//     tasks: {
//         id: number
//         text: string
//         done: boolean
//     }[];
//     deleteTask: (id: number) => void
// }
export const MyTask = () => {

    const {tasks, deleteTask} = useTasks()
  return (
    <div>
        <ul>
            {tasks.map((task) => <li key={task.id}>
                {task.text}
                <button onClick={() =>deleteTask(task.id)}>delete</button>
            </li> )}
        </ul>
    </div>
  )
}
