import React from 'react'
import '../App.css'
import maleProfile from '../asset/man.svg'
import femaleProfile from '../asset/woman.svg'
import dot from '../asset/dot.svg'


const data = [
  // {Headid: 'ID', 
  // Headname: 'user', 
  // HeadGender: 'Gender', 
  // Headstage: 'stage', 
  // Headoverallgrade: 'Overall Grade',
  // Headcertficate : 'Certificate'
  // },
    
  {id: '0001', 
        name: 'Sammy Smith', 
        Gender: 'Male', 
        stage: 3, 
        overallgrade: '160/200',
        certficate : 'Not uploaded'
    },
  {id: '0003', 
        name: 'Davidluke Dike', 
        Gender: 'female', 
        stage: '5', 
        overallgrade: '340/400',
        certficate : 'Not uploaded'
    },
  {
  id: '0002', 
name: 'Sotonye Ebadan', 
Gender: 'male', 
stage: '8', 
overallgrade: '760/800',
certficate : 'uploaded'
},
  {
    id: '0002', 
    name: 'Sotonye Ebadan', 
    Gender: 'male',   
    stage: '3', 
     overallgrade: '340/400',
    certficate : 'Not uploaded'
    },
    {
      id: '0002', 
      name: 'Sotonye Ebadan', 
      Gender: 'female',
    stage: '8', 
    overallgrade: '760/800',
    certficate : 'uploaded'
    },
    {
      id: '0002', 
      name: 'Sotonye Ebadan', 
      Gender: 'female',
    stage: '8', 
    overallgrade: '760/800',
    certficate : 'uploaded'
    },
    {
      id: '0002', 
      name: 'Sotonye Ebadan', 
      Gender: 'female',
    stage: '8', 
    overallgrade: '760/800',
    certficate : 'uploaded'
    },
    {
      id: '0002', 
      name: 'Sotonye Ebadan', 
      Gender: 'female',
    stage: '8', 
    overallgrade: '760/800',
    certficate : 'uploaded'
    },
    {
      id: '0002', 
      name: 'Sotonye Ebadan', 
      Gender: 'female',
    stage: '8', 
    overallgrade: '760/800',
    certficate : 'uploaded'
    }
]
const Dash = () => {
  let user = JSON.parse(sessionStorage.getItem('user'))
    return (
    <div style={{'backgroundColor': '#F5F5F5', 'minHeight': '100vh'}}>
        <h1>{`Good AFternoon ${user?.name}!, Welcome to your dashboard`}</h1>
        <p className='text-center'>Showing 1-10 of 1,778 students </p>
        <div >
       {
         data && data.map((item, index)=>(
        <div className='d-flex justify-content-around bull'> 
          <p>{item.id}</p>
          <p>{item.name}</p>
            {(item.Gender === 'male') ? <img src= {maleProfile} alt = 'male' />
            : <img src= {femaleProfile} alt= "female" />
            }
            <p>{item.Gender}</p>
            <p>{item.stage}</p>
            <p>{item.overallgrade}</p>
            <p className={(item.certficate ==='uploaded' ? 'text-success' : 
            'text-danger')}>{item.certficate}</p>
            <img src ={dot} alt = 'dot' />
        </div>
         ))
       }
        </div>
    </div>
  )
}

export default Dash