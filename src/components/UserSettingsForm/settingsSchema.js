import * as Yup from 'yup';

export const settingsSchema = Yup.object({
  lastName: Yup.string().required('The field is required'),
  lastEmail: Yup.string()
    .email('Please enter a valid email address (must contain @)')
    .required('Email is required'),
  lastKilo: Yup.number()
    .min(1, 'The value must be at least 0')
    .max(9999, 'The value must be no more than 4 numbers')
    .required('The field is required'),
  lastVolume: Yup.number()
    .min(1, 'The value must be at least 0')
    .max(9999, 'The value must be no more than 4 numbers')
    .required('The field is required'),
});
