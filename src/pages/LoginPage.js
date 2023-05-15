import React, { useState } from 'react'
import './LoginPage.css'
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
  const[loginData, setloginData] = useState({
    name : '',
    password : ''

})
  const setLogin = (e) =>{
    setloginData({
      
        ...loginData,
        [e.target.name] : e.target.value
    }) 
}
const HandleSub = (e) =>{
    e.preventDefault()
    let user = JSON.parse(sessionStorage.getItem('user'))
    
    if(loginData?.name === user.name && loginData.password === user.password){
      toast.success('sucessfully logged in')
      setInterval(()=>{
        window.location = '/sign'
    },1500)
    }
    else{
      toast.error('wrong email or password')
    }
    
   
}
  return (
    <div className='container'>
    <ToastContainer />
    <h1 style={{'textAlign':'center'}}> LOGIN FORM </h1>
    <form onSubmit={HandleSub}>
        <div className='form'>
        <input placeholder='Name' name='name' onChange={setLogin}  />
        <input placeholder='Password' name= 'password' onChange={setLogin} />
        <button>Submit </button>
        </div>
    </form>
</div>
  )
}

export default LoginPage