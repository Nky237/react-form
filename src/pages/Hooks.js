import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
const Hooks = () => {
  const[count, setCount] = useState(0)
  const[text, setText] = useState(false)
  const[value, setValue] = useState("Pedro")
  useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then((response) => console.log(response.data))
  }, [])
//   const Increment = ()=>{
//     setCount(count + 1)
//     console.log('hello')
//   }
//   const change = (event)=>{
//     let newValue = event.target.value
//     setValue(newValue)
//   }
//   const useReducer = ()=>{
//     setCount(count + 1)
//     setText(!text)
//   }

// USE REDUCER
const[state, dispatch] = useReducer()
    return (
    <div>
        {/* <h1>{count}</h1> */}
        {/* <button onClick={Increment}>+</button> */}
        {/* <button>Click here</button> */}
        {/* <input type='text' onChange={change} /> */}
        {/* {value} */}
        <h1>{count}</h1>
        <button onClick={useReducer}>Click here</button> 
        {/* {text && <p>This is a text</p> } */}
        {text ? <p>This is a text</p> : <p>Hello</p>}
    </div>

  )
}

export default Hooks