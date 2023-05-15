import React, { useState } from 'react'
import './LoginPage.css'
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
    const[form, setForm] = useState({
        name : '',
        email : '',
        password : ''

    })
    const setHandlle = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        }) 
    }
   function HandleSubmit(e){
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(form))
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!form?.name){
        toast.error('username is required')
    }
    if(!form?.password){
        toast.error('password is required')
    }
    else if(form?.password.length < 4){
        toast.error("password must be more than 4 characters")
    }
    else if(form?.password.length > 10){
        toast.error("password must be less than 10 characters")
    }
    if(!form?.email){
        toast.error('Email is required!');
    }
    else if (!regex.test(form?.email)) {
        toast.error("This is not a valid email format!")
  }
  else{
    toast.success('registered sucessfully')
    setInterval(()=>{
        window.location= '/login'
    },2000)
}

   
   }

    return (
        <div className='container'>
        <ToastContainer />
        <h1 style={{textAlign:'center'}}> REGISTRATION FORM </h1>
        <form onSubmit={HandleSubmit}>
            <div className='form'>
            <input placeholder='Name' name='name' onChange={setHandlle}  />
            <input placeholder='Email' name='email' onChange={setHandlle} />
            <input placeholder='Password' name= 'password' onChange={setHandlle} />
            <button>Submit </button>
            </div>
        </form>
    </div>
  )
}

export default SignUp