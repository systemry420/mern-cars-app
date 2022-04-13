import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Login</h1>  
        <Input>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' placeholder='Username' />
        </Input>        
        <Input>
          <label htmlFor='password'>Password</label>
          <input type='text' id='password' placeholder='password' />
        </Input>
        <Input>
          <input type='submit' value='Login'/>
        </Input>
        <Input>
          <Link to='/register'>Don't have an account?</Link>
        </Input>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px lightgray;
`

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
  text-align: center;
  
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

export default Login