import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    todotask: Yup.string()
    .required('task is required')
    .min(5, 'Minimum 5 chars')
});