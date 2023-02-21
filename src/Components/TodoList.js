import { Button, Input, list } from '@chakra-ui/react';
import React, {useState, useEffect, useMemo, useCallback} from 'react'
import '../css/App.css'
import Target from './Target';
function TodoList() {
    const [state, setstate] = useState('');
    const [list, setList] = useState([])
    const [listLine, setListLine] = useState([]) 
    const [isTrue, setIsTrue] = useState(true)
    const [remove, setRemove] = useState('remove')
    const [icon,setIcon] = useState(false)
    const [val, setVal] = useState('')

    const textInput=(e)=>{
        setstate(e.target.value)
    }

    const addToList=()=>{
        const newList = list.concat(state);
        setList(newList);
    }


    const lineToList=(i)=>{
        const newList = list.concat();

        setListLine(newList);
    }

    const Complete = ()=>{
      setIsTrue(!isTrue)
    }
    
    const removeElement = (i) =>{
      setList(list.filter((e)=> e!==i))
    }
    
    
  return (
    <>
    <Target />
    <div>
      <Input placeholder='enter' type={'text'} onChange={textInput}/>
      <button className='btn'  onClick={addToList}>Add</button>
      <button className='btn'  onClick={Complete}>completed</button>
      {isTrue&&<ul>
        {list.map((e,i)=><div className='list'> <li value={e} key={i}>{e}</li>
        <div className='btns'>
        <button className='btn' type='submit' key={i}  onClick={()=>removeElement(e)}>{remove}</button>
          <button className='btn'  onClick={lineToList}>Completed</button>
          {icon && <i class="fa fa-check" aria-hidden="true"></i>}
          </div> 
          </div>)}
      </ul>}
    
      {!isTrue&&<ul>
      {listLine.map((e,i)=><li key={i}>{e}</li>)}
      </ul>}
      
    </div>
    </>
  )
}
{/* <span key={i-1} onClick={removeElement}>{remove}</span> */}
export default TodoList


