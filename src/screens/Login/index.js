import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {accountActions} from '../../Redux/Actions';
import DialogNoti from '../../components/DialogNoti';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../constants';
import {Snackbar} from 'react-native-paper';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [contentSnackbar, setContentSnackbar] = useState('');
  const [password, setPassword] = useState('1234567a');
  const [phone, setPhone] = useState('0984987103');

  const handleLogin = () => {
    dispatch(
      accountActions.accountLogin(
        {
          phone: phone,
          password: password,
        },
        {
          success: data => {
            const expiresAt = new Date().getTime() + 60000;
            AsyncStorage.setItem(
              constants.storageKeys.expiresAt,
              JSON.stringify(expiresAt),
            );
            AsyncStorage.setItem(constants.storageKeys.token, data.token);
            AsyncStorage.setItem(
              constants.storageKeys.refreshToken,
              data.refreshToken,
            );
            dispatch(accountActions.getCurrentAccount({}));
          },
          failed: mess => {
            setOpenSnackbar(true);
            setContentSnackbar(mess);
          },
        },
      ),
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginContainer}>
          {/* {openSnackbar && (
            <DialogNoti
              title="Thông báo"
              content={contentSnackbar}
              visible={openSnackbar}
              setVisible={setOpenSnackbar}
            />
          )} */}
          {openSnackbar && (
            <Snackbar
              visible={openSnackbar}
              onDismiss={() => {
                setOpenSnackbar(false);
              }}
              action={{
                label: 'Đóng',
                onPress: () => {
                  setOpenSnackbar(false);
                },
              }}>
              {contentSnackbar}
            </Snackbar>
          )}
          <Text style={styles.textTitleLogin}>Đăng nhập</Text>
          <View style={{width: '100%'}}>
            <Text style={styles.lableInput}>Số điện thoại</Text>
            <TextInput
              style={styles.inputLogin}
              value={phone}
              onChangeText={text => {
                setPhone(text);
              }}
            />
            <Text style={styles.lableInput}>Mật khẩu</Text>
            <TextInput
              style={styles.inputLogin}
              secureTextEntry={true}
              value={password}
              onChangeText={text => {
                setPassword(text);
              }}
            />

            <View style={styles.setPass}>
              <TouchableOpacity>
                <Text style={styles.textForgetPass}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: '100%'}}>
            <TouchableOpacity
              onPress={() => {
                handleLogin();
              }}
              style={styles.touchableNextLogin}>
              <View style={styles.nextLoginContainer}>
                <Text style={styles.textNextLogin}>Đăng nhập</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    marginTop: 30,
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textTitleLogin: {
    fontFamily: 'Opificio',
    fontSize: 38,
    width: '100%',
  },
  touchableSigninGG: {
    height: 60,
    width: '100%',
  },
  signinGGContainer: {
    flex: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  logoGG: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  textSigninGG: {
    fontFamily: 'OpificioBold',
    fontSize: 18,
  },
  lableInput: {
    fontWeight: '700',
  },
  inputLogin: {
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 18,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    fontFamily: 'SecretCode',
  },
  setPass: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBox: {
    width: 20,
    height: 20,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
  },
  textRememberMe: {
    marginLeft: 8,
  },
  textForgetPass: {
    fontWeight: '700',
  },
  touchableNextLogin: {
    height: 50,
    width: '100%',
  },
  nextLoginContainer: {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textNextLogin: {
    fontWeight: '700',
    color: 'white',
  },
  signEmail: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signEmailCenter: {
    flex: 1.5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSignEmail: {
    color: 'gray',
  },
  lineCenter: {
    borderWidth: 1,
    borderBottomColor: 'gray',
    flex: 1,
  },
  footerLogin: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  textCreateAccount: {
    marginLeft: 8,
    fontWeight: '700',
  },
});
