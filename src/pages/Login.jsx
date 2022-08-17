import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import * as yup from 'yup'

import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -10
    },
    form: {
        margin: 12
    }
})

const initialValues = {
    email: '',
    password: ''
}

const FormikInputValue = ({name, ...props}) =>{
    const [field, meta, helpers] = useField(name)

    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

const validationSchema = yup.object().shape({
    email: yup
    .string()
    .email('El correo ingresado no válido')
    .required('El correo electrónico es requerido'),
    password: yup
    .string()
    .min(8, 'La contraseña ingresada es muy corta')
    .max(16, 'La contraseña ingresada es muy larga')
    .required('La contraseña es requerida')
})

const Login = () => {
  return (
    <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
    >
        {({handleSubmit})=>{
            return (
                <View style={styles.form}>
                    <Text>Iniciar sesión</Text>
                    <FormikInputValue
                        name='email'
                        placeholder='Correo Electrónico' 
                    />
                    <FormikInputValue
                        name='password'
                        placeholder='Contraseña'
                        secureTextEntry
                    />
                    <Button onPress={handleSubmit} title='Enviar'/>
                </View>
            )
        }}
    </Formik>
  )
}

export default Login