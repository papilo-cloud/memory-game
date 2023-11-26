import { useReducer, useState } from 'react'
import { Game } from './components/Game'
import { AddTask } from './components/AddTask';
import { MyTask } from './components/MyTask';


// type AppProps = {
//   message?: string,
//   count: number
// }
// const initialState: AppProps = {count: 0}

// type ACTIONTYPE = {type: 'increment'; payload: number} | {
//   type: 'decrement'; payload: string
// }
// function reducer(state:typeof initialState, action: ACTIONTYPE) {
//   switch (action.type) {
//     case 'increment':
//       return{count: state.count + action.payload}
//     case 'decrement':
//       return { count: state.count - Number(action.payload)}
//     default:
//       throw new Error();
//   }
// }
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum'
  , done: true},
  {id: 1, text: 'Watch a puppet show'
  , done: false},
  {id: 2, text: 'Lennon Wall pic'
  , done: false},
];

function App() {
  const [task, setTask] = useState(initialTasks)
  function handleAddTask(text: string) {
    setTask([
      ...task,
      {
        text: text,
        id: nextId++,
        done: false
      }
    ])
    }
    function deleteTask(id:number) {
      setTask(task.filter( idx => idx.id != id))
    }
    console.log(task)
  return (
    <>
      {/* <Game rows={4} columns={4} /> */}
      <AddTask handleAddask={handleAddTask} />
      <MyTask tasks={task} deleteTask={deleteTask} />
    </>
  )
}

export default App
