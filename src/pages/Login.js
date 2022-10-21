import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <div className='registerForm'>
          <p className='registerHeader'>Sign In</p>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate={(values) => {
              const errors = {}
              if (!values.email) {
                errors.email = 'Email required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address'
              }
              if (!values.password) {
                errors.password = 'Invalid password'
              } else if (values.password.length < 6) {
                errors.password = 'Please, enter at least 6 characters'
              }
              return errors
            }}
            onSubmit={() => {
              navigate('/')
            }}
          >
            {({ isSubmitting }) => (
              <Form className='formContainer '>
                <div>
                  <p className='formLabels '>Email</p>
                  <Field className='input' type='email' name='email' />

                  <ErrorMessage
                    className='error'
                    name='email'
                    component='div'
                  />

                  <p className='formLabels '>Password</p>
                  <Field className='input' type='password' name='password' />
                  <ErrorMessage
                    className='error'
                    name='password'
                    component='div'
                  />
                </div>
                <button
                  className='registerButton'
                  type='submit'
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
                <p className='choice'>
                  <Link className='author' to='/forgotpassword'>
                    Forgot Password?
                  </Link>
                </p>
                <hr className='line' />
                <p className='choice'>
                  Don't Have An Account?
                  <Link to='/register'>
                    <strong> Sign Up</strong>
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
