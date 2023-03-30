import * as yup from 'yup'

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g

export const userSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  phone: yup
    .string().max(20)
    .matches(phoneRegExp, { message: 'Phone number is not valid' })
    .required(),
  category: yup
    .string()
    .oneOf(
      [
        'Transfer',
        'Excursions',
        'Car rental with driver',
        'Rent a car without a driver',
        'Borderran',
        'Fast Truck',
      ],
      'Select option'
    )
    .required(),
})
