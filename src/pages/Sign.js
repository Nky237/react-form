import React, { useState, useEffect} from 'react'
import '../App.css'

const Sign = () => {
  const initialValue = {
    user: '',
    gender: '',
    password: '',
    email: ''
  };
  const[formValues, setformValues] = useState(initialValue);
  const[formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange= (e)=>{
        const{name, value} = e.target;
        setformValues({...formValues, [name] :value})
        console.log(formValues)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true);

  }
  
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) =>{
    const errors = {}
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.user){
        errors.user = 'username is required!';
    }
    if(!values.password){
        errors.password = 'password is required!';
    }
    else if(values.password.length < 4){
        errors.password = "password must be more than 4 characters"
    }
    else if(values.password.length > 10){
        errors.password = "password must be less than 10 characters"
    }
    if(!values.email){
        errors.email = 'Email is required!';
    }
    else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
  }
  return errors;
};
    return (
    <div className='container'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
       <h1 style={{textAlign:'center'}}> REGISTRATION FORM </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input name='user' type='text'
                value={formValues.user}
                onChange={handleChange}
                />
            </div>
            <p className='err'>{formErrors.user}</p>
            <div>
                <label>Gender</label>
                <div style={{display: 'flex', flexDirection:'column'}}>
                <span><input name='gender' type='radio' 
                  value={formValues.male}
                  onChange={handleChange}
                  />Male</span> 
                <span><input name = 'gender' type='radio' 
                  value={formValues.female} 
                  onChange={handleChange}
                  />Female</span>
                </div>
            </div>
            <div>
                <label>Password: </label>
                <input name='password' type='password'
                  value={formValues.password}
                  onChange={handleChange}
                  />
            </div>
            <p className='err'>{formErrors.password}</p>
            <div>
                <label>Email: </label>
                <input name='email' type='email'
                  value={formValues.email}
                  onChange={handleChange}
                  />
            </div>
            <p className='err'>{formErrors.email}</p>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Sign;