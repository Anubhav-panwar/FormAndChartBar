import React,{ useState } from 'react';
import "../app.css";
import FormInput from "../Form/FormInput";
import img from '../Capture.PNG'
import { useNavigate } from "react-router-dom";




const Home = () => {
  const navigate = useNavigate();
   

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Your email address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Your password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm  your password",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Your full name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
    id: 5,
      name: "phone",
      type: "text",
      placeholder: "Mobile Number",
      errorMessage:
        "invalid Phone Number",
      label: "Your phone number",
      pattern: "[7-9]{1}[0-9]{9}",
      required: true,
    },
    
    
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    
    <div className="app">
      <div className="left">
        <img src={img} alt="LOADING"/>
        <h1 style={{"font-size": "40px",'textAlign':'center'}}>Choose a data range</h1>
        <p style={{'textAlign':"center"}}>    Lorem ipsum dolor sit amet consectetur
          <br />
           adipisicing elit. Modi, repellat.


        </p>
      </div>
     <div className="right">
     <form onSubmit={handleSubmit}>
        <h1 style={{"font-size": "40px"}}>Create an account</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <input type="checkbox" name="" id="" />
        <h5 className="terms" style={{"display":"inline-block"}}>I read and agree Terms and Condition</h5>
<br />
          
          

{/* <button className="btn">Create account</button> */}

{/* <Link to="/dashboard">Create account</Link> */}
     

        
     
       
       <button className='btn' onClick={() => navigate("/chartbar")}>Go to Contact</button>

       
       
    
      </form>

     </div>
     
    </div>
    
    
  );
};

export default  Home;