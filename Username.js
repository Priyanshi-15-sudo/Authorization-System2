import React from 'react';
// import {link} from 'react-router-dom'
import avatar from '../assets/profile.png';
import styles from '../styles/username.module.css';
import {Toaster} from 'react-hot-toast';
import { useFormik } from 'formik';
export default function Username() {
  const formik = useFormik({
    initialValues : {
      username : 'example123'
    },
    validate : usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      setUsername(values.username);
      navigate('/password')
    }
  })
  return (
    <div className="container mx-auto">
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font bold'>Hello Again!</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Explore More by connecting with us.</span>
          </div>

          <form className='py-1'onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src="{avatar} className={styles.profile_img}" alt="avatar"/>
            </div>

            <div className="textbox flex flex-col item-center gap-6">
              <input  className={styles.textbox} type="text" placeholder ='Username' />
              <button className= {styles.btn} item-center type='submit'> Let's Go </button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'> Not a Member <a className='text-red-500' href="/register">Register Now</a></span>
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}
