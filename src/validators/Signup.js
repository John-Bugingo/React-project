import * as yup from 'yup';

const SignUpSchema=yup.object({
name:yup.string().required(),
email: yup.string().email().required(),
password: yup.string().min(5).required(),
});

export default SignUpSchema;