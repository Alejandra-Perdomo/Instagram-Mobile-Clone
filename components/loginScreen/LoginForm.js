import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'


export default function LoginForm({navigation}) {

    const loginFormScheema = Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        password:Yup.string().required().min(6,'Your password must have at least 6 characters')
    })

  return (
    <View style={styles.wrapper}>
        <Formik
        initialValues={{email:'',password:''}}
        onSubmit={(values)=>console.log(values)}
        validationSchema={loginFormScheema}
        validateOnMount={true}
        >
            {({handleChange,handleBlur,handleSubmit,values,isValid})=>(
            <>
            <View>
                <TextInput
                placeholderTextColor='#444'
                placeholder='Phone number, username, or email'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                autoCapitalize='none'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={[styles.inputField,{
                    borderColor: values.email.length < 1 || Validator.validate(values.email)
                    ?'#ccc':'red',
                }]}
                />
                <TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                autoCapitalize='none'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={[styles.inputField,{
                    borderColor: 1 > values.password.length || values.password.length >= 6
                    ?'#ccc':'red'
                }]}
                />
            </View>
            <View style={{alignItems:'flex-end',marginBottom:30}}>
                <Text style={{color:'#6BB0F5'}}>Forgot Password?</Text>
            </View>
            <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signupContainer}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.push('SignupScreen')}>
                        <Text style={{color:'#6BB0F5'}}> Sing Up</Text>
                    </TouchableOpacity>
            </View>
            </>
            )}
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:70,
    },
    inputField:{
        borderRadius:4,
        padding:12,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1
    },
    button:isValid=>({
        backgroundColor:isValid?'#0096F6':'#9ACAF7',
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4,
    }),
    buttonText:{
        fontWeight:'600',
        color:'#fff',
        fontSize:16
    },
    signupContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:50
    }
})