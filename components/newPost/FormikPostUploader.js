import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Divider } from 'react-native-elements';
const PLACEHOLDER_IMG = "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png";


const uploadPostScheema=Yup.object().shape({
    imageUrl:Yup.string().url().required('A URL is required'),
    caption:Yup.string().max(2200,'Caption has reached the character limit.'),
})

export default function FormikPostUploader() {

    const [imageURL, setImageURL] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
    initialValues={{imageUrl:'',caption:''}}
    onSubmit={(values)=>console.log(values)}
    validationSchema={uploadPostScheema}
    validateOnMount={true}
    >
     {({handleBlur,handleChange,handleSubmit,values,errors,isValid})=>
        <View>
            <View style={styles.ImgCaptionContainer}>
                <Image style={styles.formImage} source={{uri:imageURL?imageURL:PLACEHOLDER_IMG}}/>
                <View style={{flex:1}}>
                <TextInput style={styles.formInput} 
                onChange={e=>setImageURL(e.nativeEvent.text)}
                placeholder='Enter image URL...' 
                placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                />
                </View>
            </View>
            {errors.imageUrl && (
                <Text style={{fontSize:10,color:'red',textAlign:'center'}}>{errors.imageUrl}</Text>
            )}
            <Divider width={1} orientation='vertical'/>
            <View>
            <TextInput style={styles.formInput} placeholder='Write a Caption...' 
                placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
            />
            </View>
            <Button onPress={handleSubmit} title='Share' disabled={!isValid} style={styles.submitBtn}/>
        </View>
     }   
    </Formik>
  )
}

const styles = StyleSheet.create({
    formInput:{
        color:'white',
        fontSize:20,
        marginHorizontal:5,
    },
    formImage:{
        width:100,
        height:100,
    },
    ImgCaptionContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        margin:10,
    },
    submitBtn:{
        
    }
})