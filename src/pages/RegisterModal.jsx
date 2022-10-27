import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineUser, AiOutlineEyeInvisible, AiOutlineMail} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { onRegister } from '../store/feature/RegisterSlice';


export const RegisterModal = ({visible, tutup, tokens, setToken}) => {
  const [email] = useState();
  const [registerMsg, setRegisterMsg] = useState(false);
  const initialValues =  {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const dispatch = useDispatch();
  const {register} = useSelector((state) => state.register);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
  }

  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    if(token){
      setToken(true)
    }else{
      setToken(false)
    }
  }, [token, setToken])


    const handleSubmit = async (e) => {
      e.preventDefault();
      try{   
          dispatch(onRegister(formValues))
          tutup()
      }catch (error) {
          setRegisterMsg(true)
          console.log(error);
      }
    }

    const handleOnClose = (e) => {
      if(e.target.id === 'container') 
      tutup()
    }
    const validateEmail = () => {
      if (email === undefined) return true;
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if(!visible) return null

    return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black'>
        <div className="bg-white p-2 rounded w-[500px]">
            <div className='flex items-center justify-between mb-7 '>
                <p className='font-semibold '>Create Account</p>
                <button onClick={tutup}><AiOutlineClose /></button>
            </div>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
        <div className='flex items-center border border-gray-400 p-2 rounded-full mb-5 justify-between'>
          <input
            type="text"
            value={formValues.firstName}
            rules={[{ required: true, message: 'Please input your firstname!' }]}
            name='first_name'
            onChange={handleChange}
            className="w-full rounded-full outline-none p-1"
            placeholder="First Name"
          />
          <AiOutlineUser size={20} className='mr-2' />
        </div>
        <div className='flex items-center border border-gray-400 p-2 rounded-full mb-5 justify-between'>
          <input
            type="text"
            name='last_name'
            value={formValues.last_name}
            onChange={handleChange}
            className="w-full rounded-full outline-none p-1"
            placeholder='Last Name'
          />
          <AiOutlineUser size={20} className='mr-2' />
        </div>
        <div className='ml-1 flex items-center'>
          {!validateEmail() && (
            <p className='text-red-600'> Please input a valid email! </p>
          )}
        </div>
        <div className='flex items-center border border-gray-400 p-2 rounded-full mb-2 justify-between'>
          <input
            type="email"
            name='email'
            value={formValues.email}
            onChange={handleChange}
            // onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full outline-none p-1"
            placeholder='Email Address'
          />
          <AiOutlineMail size={20} className='mr-2' />
        </div>
        
        <div className='flex items-center border border-gray-400 p-2 rounded-full mb-5 justify-between'>
          <input
            type="password"
            name='password'
            value={formValues.password}
            onChange={handleChange}
            className="w-full rounded-full outline-none p-1"
            placeholder='Password'
          />
          <AiOutlineEyeInvisible size={20} className='mr-2' />
        </div>
        <div className='flex items-center border border-gray-400 p-2 rounded-full mb-5 justify-between'>
          <input
            type="password"
            name='password_confirmation'
            value={formValues.password_confirmation}
            onChange={handleChange}
            className="w-full rounded-full outline-none p-1"
            placeholder='Password Confirmation'
          />
          <AiOutlineEyeInvisible size={20} className='mr-2' />
        </div>
          <div>
            {registerMsg &&
                <p className='text-red-600 mb-5 text-center'>Register failed, please try again.</p>
            }
          </div>
        </div>
        <div className="flex items-end justify-end text-center">
          <button button onClick={handleSubmit}  className='bg-red-600 hover:bg-red-400 px-8 py-2 rounded-full text-white'>Register Now</button>
        </div>
        </form>
      </div>
    </div>
  )
}
