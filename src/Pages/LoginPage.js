import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login, signup } from '../action';
import loginImage from '../media/LoginImage.png';
import './LoginPage.css';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [condition, setCondition] = useState(true);

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onPhoneChange(e) {
    setPhone(e.target.value);
  }

  function onFormChange() {
    setCondition(!condition);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (condition) {
      await props.login({ email, password });
    } else {
      await props.signup({ email, password, name, phone });
    }
  }

  return (
    <>
      <div className='container d-flex justify-content-center'>
        <div>
          {' '}
          <img className='loginimage' src={loginImage} alt='LoginImage' />{' '}
        </div>
        <div
          className='card mt-5 text-center shadow login-card'
          style={{ width: '20rem' }}
        >
          <div className='card-header lead'>
            {condition ? 'Login' : 'Sign Up'}
          </div>
          <div className='card-body'>
            <form onSubmit={onFormSubmit}>
              {!condition && (
                <div className='form-group'>
                  <input
                    className='form-control'
                    required
                    type='text'
                    onChange={onNameChange}
                    value={name}
                    placeholder='Name'
                  />
                </div>
              )}
              <div className='form-group'>
                <input
                  className='form-control'
                  required
                  type='email'
                  onChange={onEmailChange}
                  value={email}
                  placeholder='Email'
                />
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  required
                  type='password' 
                  autocomplete="current-password"
                  onChange={onPasswordChange}
                  value={password}
                  placeholder='Password'
                />
              </div>
              {!condition && (
                <div className='form-group'>
                  <input
                    className='form-control'
                    required
                    type='tel'
                    onChange={onPhoneChange}
                    value={phone}
                    placeholder='Phone Number'
                  />
                </div>
              )}
              {props.loading.error}
              <div className='form-group'>
                <button className='btn btn-primary btn-block' type='submit'>
                  {props.loading.loading ? (
                    <div className='spinner-grow' role='status'>
                      <span className='sr-only'>Loading...</span>
                    </div>
                  ) : condition ? (
                    'Login'
                  ) : (
                    'Sign Up'
                  )}
                </button>
              </div>
              <div className='form-group'>
                <Link
                  className='btn btn-secondary btn-block'
                  onClick={onFormChange}
                >
                  {condition ? 'Sign Up' : 'Login'}
                </Link>
              </div>
              <Link to='/forgetpassword' className='forget-password'>
                Forget Password ?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { loading: state.loading };
}

export default connect(mapStateToProps, { login, signup })(LoginPage);
