import * as yup from "yup"
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email('Type a valid username!').required('It is mandatory to enter an email address!'),
    age: yup.number().positive('Please enter a positive age!').integer('Please enter your age as an integer!').required('It is mandatory to enter your age!'),
    password: yup.string().min(5, 'Plese enter at least 5 character!').matches(passwordRules, {
        message: "Please enter at least 1 uppercase letter, 1 lowercase letter and a number!"
    }).required('It is mandatory to enter a password!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Paswords do not match!').required("It is mandatory to enter a password again!")
})

export const advancedSchema = yup.object().shape({
    username: yup.string().min(3, 'Username is at least 3 character!').required('It is mandatory to enter a username!'),
    university: yup.string().oneOf(['bogazici', 'odtu', 'hacettepe', 'istanbul', 'gazi']).required('Please choose your university!'),
    isAccepting: yup.boolean().oneOf([true], 'Accept terms of use!'),
})