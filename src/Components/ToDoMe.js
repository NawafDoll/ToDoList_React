import { Button, Input } from '@chakra-ui/react'
import React, {useState, useRef, useEffect, createContext} from 'react'
import '../css/App.css'
import shortid from 'shortid'
import Target from './Target'
export const contextTodos = createContext()
function ToDoMe() {
    const [text, setText] = useState('');
    let [todos, setTodos] = useState([]);
    const [showAll, setShowAll]= useState('all')
    const [all, setAll]= useState(true);
    const first = useRef(null)

    
    useEffect(() => {
        first.current.focus()
    }, []);

    const handleText=(e)=>{
        setText(e.target.value);
        first.current.focus()
    }
    const removeAllTodos = ()=>{
        setTodos(todos.filter((todo)=> !todo.complete))
        setAll(true)
    }
    

    const handleSubmit = (e)=>{
        e.preventDefault()
       let submit ={
        id: shortid.generate(),
        text: text,
        complete: false
        }
        setTodos([...todos,submit])
        setText('');
    }

    const handleDelete=(id)=>{
        setTodos(todos.filter((todo)=>todo.id !== id))
    }

    const handlesOnOff = ()=>{
        let arr = todos.map((e)=>e.complete === true?e:'');
        // console.log(arr)
        if(arr.includes('')===true  || arr.length === 0){
         setAll(false)
        }else if(arr.includes('')===false ){
         setAll(true)
        }
        
     }

    const allComplete= ()=>{
        setTodos(todos.map((todo)=>{
            handlesOnOff()
            return{
                ...todo,
                complete: true
            }
        }))
       
        
    }

    const handleComplete = (id)=>{
        // useEffect(()=>{})
       setTodos(todos.map((todo)=>{
        if(todo.id === id){
            return{
                ...todo,
                complete: !todo.complete
            }
        }else{
            return todo 
        }
       }))
   
    
      
    }

    useEffect(()=>{
        let arr = todos.map((e)=>e.complete === true?e:'');
         if(arr.includes('')  || arr.length === 0){
             setAll(true)
         }else if(arr.includes('')===false){
             setAll(false)
         }
         console.log(arr)
 },[todos])
    const handle = (e)=>{
        setShowAll(e)
    }

    if(showAll === 'complete'){
        todos = todos.filter((e)=>e.complete)
    }else if(showAll === 'nonComplete'){
        todos = todos.filter((e)=>!e.complete)
    }
  return (
    <>
    <div className='target' style={{justifyContent:all?'space-between':'start'}}>
        <img className='goal' src='data:image/jpeg;base64,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'/>
    <img className='arrow' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyqj-Mui2MN6jZuWEJa4Af_1R2f0z2zH-ng&usqp=CAU'/>
    </div>
       
    <div>
        <div className='head'>
        <h1 className='last' style={{color:all?'red':'green',backgroundColor:all?'red':'green'}}><span className='onoff'>{all?'off':'on'}</span></h1>
        <h1 className='question'>ماهي اهدافك اليوم؟</h1>
        </div>
      <form onSubmit={handleSubmit}>
        <Input height={'30px'} ref={first} type={'text'} m={'10px 10px'}
         value={text} onChange={handleText}/>
        <Button className='btn' marginLeft={'10px'} onClick={handleSubmit}>أضافة</Button>
      </form>
      <ul>
        {todos.map((todo)=><li style={{listStyle:'none'}} key={todo.id}>
            <div className='list'>
                <h2 style={{textDecoration:todo.complete?'line-through':''}}>{todo.text}</h2>
                <div className='btns'>
                <button className='btn' onClick={()=>handleComplete(todo.id)}>اكملت الهدف</button>
                <button className='btn' onClick={()=>handleDelete(todo.id)}>حذف</button>
                </div>
            </div>
        </li>)}
      </ul>
      <div style={{marginTop:'20px'}}>

        <button className='btn' onClick={()=>handle('nonComplete')}>اظهار الاهداف الغير مكتملة</button>
        <button className='btn' onClick={()=>handle('complete')}>أظهار الاهداف المكتملة</button>
      </div>
      <button className='btn' onClick={()=>handle('all')}>أظهار جميع الاهداف </button>
      <button className='btn' onClick={removeAllTodos}>حذف الاهداف المكتملة</button>
      <button className='btn' onClick={allComplete}>حققت جميع الاهداف</button>
    </div>
    </>
  )
}

export default ToDoMe
