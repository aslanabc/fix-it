import React, { Component } from 'react'
import {
   Text,
   View,
   KeyboardAvoidingView,
   StyleSheet,
   Image,
   TextInput,
   TouchableOpacity,
   
} from 'react-native'
import { FontText } from '../FontText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ForgotPassword extends Component {
   render() {
      return (
         <KeyboardAvoidingView style={styles.forgotPasswordContainer}>
            <View style={styles.formContainer}>
               <View style={styles.logoContainer}>
                  <FontText emphasis="bold" style={{ fontSize: 20, marginBottom: '3%' }}>
                     ĐĂNG NHẬP
                     </FontText>
                  <Image source={{ uri: 'https://img.icons8.com/officel/80/000000/guest-male.png' }}
                     style={{ width: 100, height: 100, marginVertical: '2%' }} />
                  <FontText emphasis="bold" style={{ fontSize: 16 }}>Nhập số điện thoại</FontText>
                  <FontText emphasis="bold" style={{ fontSize: 16, marginBottom: '2%', }}>liên kết với tài khoản của bạn</FontText>
                  <FontText style={{ opacity: 0.5 }}>
                     Chúng tôi sẽ gửi mã xác nhận về
                  </FontText>
                  <FontText style={{ opacity: 0.5 }}>
                     số điện thoại của bạn
                  </FontText>

               </View>
               <View style={styles.inputFormCobtainer}>
                  <Image source={{ uri: 'https://img.icons8.com/color/48/000000/vietnam.png' }}
                     style={styles.logoVietNam} />
                  <FontText emphasis="bold" style={{ fontSize: 16, marginRight: '3%', }}>+84</FontText>
                  <TextInput style={styles.phoneNumberInput}
                     placeholder='Nhập số điện thoại'
                     maxLength={10}
                     keyboardType='phone-pad'>
                  </TextInput>
               </View>
               <View style={styles.buttonContainer}>
                  <View style={{ width: '30%', marginRight: '7%' }}>
                     <TouchableOpacity style={styles.sendButtonContainer}>
                        <FontText emphasis='bold' style={styles.sendButtonText}>Tiếp tục</FontText>
                     </TouchableOpacity>
                  </View>
                  <View style={{ width: '30%', }}>
                     <TouchableOpacity style={styles.backButtonContainer}>
                        <FontText emphasis='bold' style={styles.backButtonText}>Trở về</FontText>
                     </TouchableOpacity>
                  </View>
               </View>

            </View>
         </KeyboardAvoidingView>
      )
   }
}

const styles = StyleSheet.create({
   forgotPasswordContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white'
   },
   formContainer: {
      width: '100%',
      alignItems: 'center',
      paddingTop: '20%'

   },
   sloganText: {
      fontSize: 20,
      fontWeight: 'bold'

   },
   logoContainer: {
      alignItems: 'center',
      marginBottom: '12%'

   },
   inputFormCobtainer: {
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#F56258',
      borderWidth: 1,
      borderRadius: 20,

   },
   phoneNumberInput: {
      width: '80%',
      fontSize: 16
   },
   logoVietNam: {
      width: 33,
      height: 30,
      marginHorizontal: '3%'
   },
   sendButtonContainer: {
      borderColor: '#fff',
      backgroundColor: '#F56258',
      width: '100%',
      height: 47,
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 25,
      justifyContent: 'center',
      elevation: 10,


   },
   backButtonContainer: {
      borderColor: '#F56258',
      backgroundColor: '#fff',
      width: '100%',
      height: 47,
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 25,
      justifyContent: 'center',
      elevation: 10,
      
   },

   sendButtonText: {
      color: '#fff',
      fontSize: 17,

   },
   backButtonText: {
      color: '#F56258',
      fontSize: 17,

   },
   buttonContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: '8%',
   }


})