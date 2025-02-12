
import { useRef, useState } from 'react'
import './Register.scss'
import axios from 'axios'

const Register = () => {
   
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const textRef = useRef(null)
    const [password,setPassword] = useState('')

    let register = (e)=>{
        e.preventDefault()

        if(password === 'loh'){
            return alert('пароль не может быть таким')
        } else{
            let user = {
                name:nameRef.current.value,
                email:emailRef.current.value,
                password
            }
            axios.post('http://localhost:5002/register',user)
           
        }

       
    }

  return (
    <div className='register'>
      <div className="container">
      <h2 ref={textRef}>Регистрация</h2>
      <form>
        <label>
            <input ref={nameRef} type="text" placeholder='name' />
        </label>
        <label>
            <input ref={emailRef} type="email" placeholder='email' />
        </label>
        <label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='password' />
        </label>
        <button onClick={(e)=>register(e)} type='submit'>Регистрация</button>
      </form>
      </div>
    </div>
  )
}

export default Register
