import React from 'react'
import { FaUser,FaLock, FaEnvelope,FaVoicemail } from 'react-icons/fa';
import SignUpSchema from '../validators/Signup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const SignUpComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
    <div className="form_box">
      <div className='register_container' id='container'>
        <div className='top'>
          <span>Have an accout?<a href='/login' onClick="login()">Login</a></span>
          <h1>SignUp</h1>
        </div> 
        <div className='two_forms'>
          <div className='input_box'>
            <FaUser/>
            <input type='text' className='input_field' placeholder='First name' />
            {errors.name && <p>{errors.name?.message}</p>}

            
          </div>
          <div className='input_box'>
            <FaUser/>
            <input type='text' className='input_field' placeholder='Last name' />
            {errors.name && <p>{errors.name?.message}</p>}
          </div>
          <div className='input_box'>
            <FaVoicemail/>
            <input type='email' className='input_field' placeholder='Email' />
            {errors.email && <p>{errors.email?.message}</p>}
          </div>
          <div className='input_box'>
            <FaLock/>
            <input type='password' className='input_field' placeholder='Password' />
            {errors.password && <p>{errors.password?.message}</p>}
          </div>
          <div className='input_box'>
            <button className='button'>Register</button>
          </div>
        </div>
         <label className='lb'>
          <input type="checkbox"/>
          <p>Remember Me</p>
          <p>Terms and conditions</p>
         </label>
        </div> 
    </div>
    
    </>
  )
}
export default SignUpComp;


