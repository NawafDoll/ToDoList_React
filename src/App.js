import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Components/Navbar'
import Target from './Components/Target'
import Text from './Components/Text'
import TodoList from './Components/TodoList'
import ToDoMe from './Components/ToDoMe'
import './css/App.css'
function App() {
  return (
    <>
    <Navbar />
    <Text />
    {/* <Target /> */}
    <div className='app'>
      <ToDoMe />
    </div>
    </>
  )
}

export default App
