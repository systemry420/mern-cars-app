import React, { useState } from 'react'
import Layout from '../components/Layout'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { userRegister } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (username && password) {
      dispatch(userRegister({username, password, confirm}))
      setUsername('')
      setPassword('')
      setConfirm('')
    }
  }

  return (
    <Layout>
        <h1>Register</h1>  
      <Wrapper onSubmit={handleSubmit}>
        <Input>
          <label htmlFor='username'>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' id='username' placeholder='Username' />
        </Input>        
        <Input>
          <label htmlFor='password'>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' id='password' placeholder='password' />
        </Input>
        <Input>
          <label htmlFor='confirm'>Confirm</label>
          <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type='text' id='confirm' placeholder='Confirm' />
        </Input>
        <Input>
        <input type='submit' value='Register'/>
        </Input>
        <Input>
          <Link to='/login'>Do you have an account?</Link>
        </Input>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.form`
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px lightgray;
`

const Input = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1em 0;
  
  label {
    font-size: 1.2em;
    font-weight: bold;
  }
  input {
    padding: .8em;
    border-radius: 20px;
    border: none;
    box-shadow: 0 0 2px 2px lightgray;
    outline: none;
    font-size: .85em;

    &[type='submit'] {
      margin-top: 1.5em;
      background-color: #333;
      color: #fff;
      flex: 1;
    }
  }
`

export default Register