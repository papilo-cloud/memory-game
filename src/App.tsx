import { useReducer, useState } from 'react'
import { Game } from './components/Game'
import { AddTask } from './components/AddTask';
import { MyTask } from './components/MyTask';
import ProviderContext from './hooks/useContext';
import { Menu } from './components/Menu';


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

function App() {
  // const [task, setTask] = useState(initialTasks)
  
  return (
      // <ProviderContext>
        <Menu />
      // </ProviderContext>
  )
}

export default App
