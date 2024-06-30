import * as Yup from 'yup'

export const signupSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please Enter Your name"),
    email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(6).required("Please Enter Password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], "password does not match")
})