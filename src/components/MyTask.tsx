import React from 'react'

type taskProps = {
    tasks: {
        id: number
        text: string
        done: boolean
    }[];
    deleteTask: (id: number) => void
}
export const MyTask = ({tasks, deleteTask}: taskProps) => {

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
