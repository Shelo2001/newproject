import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Modal from 'react-modal'

const Register = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }

  return (
    <div>
      <div>
        <div className='registerForm'>
          <p className='registerHeader'>Sign Up</p>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              username: '',
              phoneNumber: '',
              city: '',
              street: '',
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
              if (!values.confirmPassword) {
                errors.confirmPassword = 'Invalid password'
              }
              if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match'
              }
              if (!values.username) {
                errors.username = 'Username required'
              }
              if (!values.phoneNumber) {
                errors.phoneNumber = 'Phone number required'
              }
              if (!values.city) {
                errors.city = 'City required'
              }
              if (!values.street) {
                errors.street = 'Street required'
              }
              return errors
            }}
            onSubmit={() => {
              setIsOpen(true)
            }}
          >
            {({ isSubmitting }) => (
              <Form className='formContainer '>
                <div className='registerForm'>
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

                    <p className='formLabels '>Confirm Password</p>
                    <Field
                      className='input'
                      type='password'
                      name='confirmPassword'
                    />
                    <ErrorMessage
                      className='error'
                      name='confirmPassword'
                      component='div'
                    />

                    <p className='formLabels '>Username</p>
                    <Field className='input' type='text' name='username' />
                    <ErrorMessage
                      className='error'
                      name='username'
                      component='div'
                    />

                    <p className='formLabels '>Phone Number</p>
                    <Field className='input' type='text' name='phoneNumber' />
                    <ErrorMessage
                      className='error'
                      name='phoneNumber'
                      component='div'
                    />

                    <p className='formLabels '>City</p>
                    <Field className='input' type='text' name='city' />
                    <ErrorMessage
                      className='error'
                      name='city'
                      component='div'
                    />

                    <p className='formLabels '>Street</p>
                    <Field className='input' type='text' name='street' />
                    <ErrorMessage
                      className='error'
                      name='street'
                      component='div'
                    />
                  </div>
                  <button
                    className='registerButton'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </button>
                  <hr className='line' />
                  <p className='choice'>
                    Already Have an Account?
                    <Link to='/login'>
                      <strong> Sign In</strong>
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <p className='title'>Registered Successfully!</p>
        <Link className='postLink' to='/'>
          Go To Posts
        </Link>
      </Modal>
    </div>
  )
}

export default Register
