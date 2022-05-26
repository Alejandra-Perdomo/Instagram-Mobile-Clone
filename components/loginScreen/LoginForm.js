import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React, {useState} from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import firebase from '../../firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export default function LoginForm({navigation}) {

    const loginFormScheema = Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        password:Yup.string().required().min(6,'Your password must have at least 6 characters')
    })

    const onlogin = async(email,password)=>{
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {    
            console.log('signed in!');
        })
        .catch((error) => {
            const errorMessage = error.message;
            Alert.alert('My Lord!',
            errorMessage+' What would you like to do next?',
            [
                {
                    text:'OK',
                    onPress: ()=>console.log('OK'),
                    style:'cancel'
                },
                {
                    text:'Sing Up',
                    onPress: ()=> navigation.push('SignupScreen')
                }
            ]
            )
        });
    }

    const onsignup = async(email,password) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('Account created succesfully!');
        })
        .catch((error) => {
            const errorMessage = error.message;
            Alert.alert('My Lord!',errorMessage);
        });
    }

  return (
    <View style={styles.wrapper}>
        <Formik
        initialValues={{email:'',password:''}}
        onSubmit={(values)=>onlogin(values.email,values.password)}
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