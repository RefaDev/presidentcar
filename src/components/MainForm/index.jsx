import { useFormik } from 'formik'
import { userSchema } from 'Validations/UserValidation'
import axios from 'axios'
import { Alert } from '@mui/material'
import { motion } from 'framer-motion'
import { forwardRef, useEffect, useRef } from 'react'
import { useState } from 'react'

import './styles.scss'

const MainForm = forwardRef(({ buttonName }, ref) => {
  const TOKEN = '6277471408:AAE_qshxc9zenv5p_ceUeoFTGnBdJAoALeA'
  const CHAT_ID = `782397974`
  const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`
  const [submited, setSumbited] = useState(false)

  const alert = useRef()
  useEffect(() => {
    const handleCloseAlert = (e) => {
      if (alert.current && !e.composedPath().includes(alert.current)) {
        setSumbited(false)
      }
    }
    document.body.addEventListener('click', handleCloseAlert)
    return () => document.body.addEventListener('click', handleCloseAlert)
  }, [])

  const onSubmit = async (values, actions) => {
    let text = `
		Name: ${values.name},
		Phone: ${values.phone},
		Select: ${values.category}
		`

    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()

    axios
      .post(URI, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: text,
      })
      .then((request) => {
        setSumbited(true)
      })
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      category: '',
    },
    validationSchema: userSchema,
    onSubmit,
  })

  const closeAlert = () => {
    setSumbited(false)
  }

  return (
    <form onSubmit={handleSubmit} ref={ref}>
      <div className='inputs'>
        <div className='input-item'>
          <input
            type='text'
            id='name'
            autoComplete='off'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Name'
            className={errors.name && touched.name ? 'input-error' : ''}
          />
          {errors.name && touched.name && <div className='error'>{errors.name}</div>}
        </div>
        <div className='input-item'>
          <input
            type='tel'
            placeholder='Phone'
            id='phone'
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? 'input-error' : ''}
          />
          {errors.phone && touched.phone && <div className='error'>{errors.phone}</div>}
        </div>
        <div className='input-item'>
          <select
            name='category'
            id='select'
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.category && touched.category ? 'input-error' : ''}
          >
            <option></option>
            <option value='Transfer' label='Transfer'>
              Transfer
            </option>
            <option value='Excursions' label='Excursions'>
              Excursions
            </option>
            <option value='Car rental with driver' label='Car rental with driver'>
              Car rental with driver
            </option>
            <option value='Rent a car without a driver' label='Rent a car without a driver'>
              Rent a car without a driver
            </option>
            <option value='Borderran' label='Borderran'>
              Borderran
            </option>
            <option value='Fast Truck' label='Fast Truck'>
              Fast Truck
            </option>
          </select>
          {errors.category && touched.category && <div className='error'>{errors.category}</div>}
        </div>
      </div>
      <button disabled={isSubmitting} className='main-button' type='submit'>
        {buttonName}
      </button>
      {submited && (
        <Alert ref={alert} className='alert' onClose={closeAlert}>
          Seccess!
        </Alert>
      )}
    </form>
  )
})

export const MMainForm = motion(MainForm)

export default MainForm
