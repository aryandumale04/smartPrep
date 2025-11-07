import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input"

const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const[error, setError] = useState(null);

  const navigate = useNavigate();

  //Handle SignUp Form Submit
  const handleSignUp = async (e) =>{
    e.preventDefault();
  };
  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className=''>
        Create an Account
      </h3>
      <p className=''>
        Join us today by entering your details below.
      </p>
      <form onSubmit={handleSignUp}>
        <div className=''>
          <Input value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John"
          type="text">
          </Input>
          <Input value={email}
          onChange={({ target })=> setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
          >
          </Input>
          <Input value={password}
          onChange={({ target })=> setPassword(target.value)}
          label="Password"
          placeholder="Minimum 8 Characters"
          type="password"
          >
          </Input>
        </div>
        {error && <p className=''>{error}</p>}

        <button type='submit' className=''>
          SIGN UP

        </button>
        <p className=''>
          Already have an account?{" "}
          <button className=''
          onClick={() => {
            setCurrentPage("login");
          }}>
            Login

          </button>
        </p>
      </form>

    </div>
  )
}

export default SignUp