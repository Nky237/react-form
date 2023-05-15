import React from 'react'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import Dash from './pages/Dash'
import 'react-toastify/dist/ReactToastify.css';
import Hooks from './pages/Hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  
  return (
    <div>
        
              <Router>
                    <Routes>
                      <Route path="/" element={<SignUp />} /> 
                      <Route path="login" element={<LoginPage />} />
                      <Route path="sign" element={<Dash  />} />
                      <Route path="hook" element={<Hooks />} />
                    </Routes>
           </Router>
              
      
    </div>
  )
}

export default App