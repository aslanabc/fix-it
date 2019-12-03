import React, { Component } from 'react';
import {
   Text,
   View,
   KeyboardAvoidingView,
   StyleSheet,
   Image,
   TextInput,
   TouchableOpacity,
   Alert
} from 'react-native';

import { FontText } from '../FontText';

export default class Verification extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   simpleAlertHandler = () => {
      //function to make simple alert
      alert('Hello I am Simple Alert');
   };
   resendAlertHandler = () => {
      Alert.alert(
         //title
         'Thông báo',
         //body
         'Gửi lại mã xác nhận thành công!',
         [
            {
               text: 'OK',
               onPress: () => console.log('No Pressed'),
               style: 'cancel'
            }
         ],
         { cancelable: false }
         //clicking out side of alert will not cancel
      );
   };

   goToNextRef(text, refPrev, refNext) {
      if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(text)) {
         refNext ? refNext.focus() : '';
      } else if (text.length === 0) {
         refPrev ? refPrev.focus() : '';
      }
   }
   render() {
      return (
         <View style={styles.container}>
            <KeyboardAvoidingView style={styles.formContainer}>
               <View style={styles.logoContainer}>
                  <FontText
                     emphasis="bold"
                     style={{ fontSize: 20, marginBottom: '3%' }}>
                     XÁC THỰC TÀI KHOẢN
                  </FontText>
                  <Image
                     source={{
                        uri:
                           'https://img.icons8.com/officel/80/000000/guest-male.png'
                     }}
                     style={{
                        width: 100,
                        height: 100,
                        marginVertical: '3%'
                     }}
                  />
                  <FontText emphasis="medium" style={{ fontSize: 16 }}>
                     Nhập mã xác thực gồm 4 chữ số chúng tôi
                  </FontText>
                  <FontText
                     emphasis="medium"
                     style={{ fontSize: 16, marginBottom: '2%' }}>
                     đã gửi đến số điện thoại của bạn
                  </FontText>
               </View>
               <View style={styles.inputFormContainer}>
                  <TextInput
                     style={styles.numberInput}
                     maxLength={1}
                     keyboardType="number-pad"
                     blurOnSubmit={false}
                     ref={ref => (this.passwordRef1 = ref)}
                     onChangeText={_ => {
                        this.goToNextRef(_, null, this.passwordRef2);
                     }}></TextInput>
                  <TextInput
                     style={styles.numberInput}
                     maxLength={1}
                     keyboardType="number-pad"
                     ref={ref => (this.passwordRef2 = ref)}
                     onChangeText={_ => {
                        this.goToNextRef(
                           _,
                           this.passwordRef1,
                           this.passwordRef3
                        );
                     }}></TextInput>
                  <TextInput
                     style={styles.numberInput}
                     maxLength={1}
                     keyboardType="number-pad"
                     ref={ref => (this.passwordRef3 = ref)}
                     onChangeText={_ => {
                        this.goToNextRef(
                           _,
                           this.passwordRef2,
                           this.passwordRef4
                        );
                     }}></TextInput>
                  <TextInput
                     style={styles.numberInput}
                     maxLength={1}
                     keyboardType="number-pad"
                     ref={ref => (this.passwordRef4 = ref)}
                     onChangeText={_ => {
                        this.goToNextRef(_, this.passwordRef3, null);
                     }}></TextInput>
               </View>
               <View style={styles.buttonContainer}>
                  <View style={{ width: '30%' }}>
                     <TouchableOpacity style={styles.sendButtonContainer}>
                        <FontText emphasis="bold" style={styles.sendButtonText}>
                           Tiếp tục
                        </FontText>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.resendButttonContainer}>
                  <FontText
                     style={{
                        opacity: 0.6
                     }}>
                     Bạn không nhận được mã xác thực?{' '}
                  </FontText>
                  <TouchableOpacity onPress={this.resendAlertHandler}>
                     <FontText emphasis="bold" style={{ color: '#F56258' }}>
                        Resend
                     </FontText>
                  </TouchableOpacity>
               </View>
            </KeyboardAvoidingView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center'
   },
   formContainer: {
      alignItems: 'center'
   },
   sloganText: {
      fontSize: 20,
      fontWeight: 'bold'
   },
   logoContainer: {
      alignItems: 'center',
      marginBottom: '2%'
   },
   inputFormContainer: {
      flexDirection: 'row',
      width: '60%',
      justifyContent: 'space-between'
   },
   numberInput: {
      width: '20%',
      alignContent: 'center',
      fontSize: 30,
      borderBottomColor: '#F56258',
      borderBottomWidth: 1,
      fontWeight: 'bold',
      textAlign: 'center'
   },
   numberInput4: {
      width: '8%',
      fontSize: 30,
      borderBottomColor: '#F56258',
      borderBottomWidth: 1,
      fontWeight: 'bold',
      paddingLeft: '4%'
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
      elevation: 10
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
      elevation: 10
   },

   sendButtonText: {
      color: '#fff',
      fontSize: 17
   },

   buttonContainer: {
      width: '100%',
      alignItems: 'center',
      marginVertical: '8%'
   },
   resendButttonContainer: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'center'
   }
});
