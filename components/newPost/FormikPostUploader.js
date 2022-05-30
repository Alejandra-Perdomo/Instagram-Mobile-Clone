import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Divider } from 'react-native-elements';
import validURL from 'valid-url';
import {db, auth} from '../../firebase'
import {collection, query, where, getDocs, doc, setDoc} from "firebase/firestore";
const PLACEHOLDER_IMG = "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png";


const uploadPostScheema=Yup.object().shape({
    imageUrl:Yup.string().url().required('A URL is required'),
    caption:Yup.string().max(2200,'Caption has reached the character limit.'),
})

export default function FormikPostUploader({navigation}) {

    const [imageURL, setImageURL] = useState(PLACEHOLDER_IMG);
    const [loggedinUser,setLoggedinUser] = useState(null);

    const getUser=async()=>{
        const user = auth.currentUser;
        const q = query(collection(db, "users"), where("owner_uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setLoggedinUser({
                username:doc.data().username,
                profilePicture:doc.data().profile_picture,
                docId:doc.id
            });
        });
        console.log('hello')
    }

    useEffect(()=>{
        getUser();
    },[])

    /* createdAt:new Date(Date.now()).toString(), */
    const uploadPostToFirebase = async(imageUrl,caption) =>{
        const docId = loggedinUser.docId;
        const docRef = doc(collection(db, "users",docId,"posts"));
        const data={
            imageUrl:imageUrl,
            user:loggedinUser.username,
            profile_picture:loggedinUser.profilePicture,
            owner_uid:auth.currentUser.uid,
            caption:caption,
            createdAt:new Date(Date.now()).toString(),
            Likes:0,
            likes_by_users:[],
            comments:[]
        }
        await setDoc(docRef, data);
        console.log('uploaded');
    }

  return (
    <Formik
    initialValues={{imageUrl:'',caption:''}}
    onSubmit={(values)=>{
        uploadPostToFirebase(values.imageUrl,values.caption)
        navigation.goBack()
    }}
    validationSchema={uploadPostScheema}
    validateOnMount={true}
    >
     {({handleBlur,handleChange,handleSubmit,values,errors,isValid})=>
        <View>
            <View style={styles.ImgCaptionContainer}>
                <Image style={styles.formImage} source={{uri:validURL.isUri(imageURL)?imageURL:PLACEHOLDER_IMG}}/>
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
            <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
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
    }
})