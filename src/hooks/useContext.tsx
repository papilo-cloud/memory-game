import React, { createContext, useReducer, useContext } from "react";


let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum'
  , done: true},
  {id: 1, text: 'Watch a puppet show'
  , done: false},
  {id: 2, text: 'Lennon Wall pic'
  , done: false},
];

type TaskContextProps = {
    tasks: {
        id: number
        text: string
        done: boolean
    }[];
    handleAddTask: (text: string) => void;
    deleteTask: (id: number) => void
}
type actionProps = 
    | {type: 'added', text: string, id: number, done: boolean}
    | {type: 'deleted', id: number}


const TaskContext = createContext({} as TaskContextProps)

export const useTasks = () => {
    return useContext(TaskContext)
}

function ProviderContext({children}:{children:React.ReactNode}) {
    const [tasks, dispatch] = useReducer(setReducer, initialTasks)
    function handleAddTask(text: string) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
            done: false
        })    
    }
        function deleteTask(id:number) {
            dispatch({
                type: 'deleted',
                id: id,
            })
        }
    function setReducer(tasks: typeof initialTasks, action:actionProps) {
        switch (action.type) {
            case 'added':
                return[...tasks,
                    {done: false,
                    id: action.id,
                    text: action.text}
                ];
            case 'deleted':
                return tasks.filter(task => task.id != action.id)
        
            default:
                throw Error('No Type Found');
        }
    }

    return (
        <TaskContext.Provider value={
            {
                tasks,
                deleteTask,
                handleAddTask
            }
        } >
            {children}
        </TaskContext.Provider>
    )
    
}

export default ProviderContext