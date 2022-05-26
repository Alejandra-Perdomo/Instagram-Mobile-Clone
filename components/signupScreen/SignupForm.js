import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

export default function SignupForm({navigation}) {

    const signupFormScheema = Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        username:Yup.string().required().min(2,'A username is required'),
        password:Yup.string().required().min(6,'Your password must have at least 6 characters')
    })

  return (
    <View style={styles.wrapper}>
      <Formik
      initialValues={{email:'',username:'',password:''}}
      onSubmit={(values)=>console.log(values)}
      validationSchema={signupFormScheema}
      validateOnMount={true}
      >
        {({handleChange,handleBlur,handleSubmit,values,isValid})=>(
          <>
          <View>
          <TextInput
                placeholderTextColor='#444'
                placeholder='email...'
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
                placeholder='Username'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='username'
                autoCapitalize='none'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                style={[styles.inputField,{
                    borderColor: 1 > values.username.length || values.username.length >= 2
                    ?'#ccc':'red'
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
          <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sing Up</Text>
          </Pressable>
          <View style={styles.loginContainer}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text style={{color:'#6BB0F5'}}> Log in</Text>
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
    marginTop:60,
    width:'100%'
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
  loginContainer:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    marginTop:50
}
})