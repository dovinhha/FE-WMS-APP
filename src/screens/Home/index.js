import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import constants from '../../constants';
import Icon, {Icons} from '../../components/Icons';
import {Avatar, Dialog, Portal, Paragraph, Button} from 'react-native-paper';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {accountActions} from '../../Redux/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const {currentAccount} = useSelector(state => state.accountReducer);
  const [openDialogAccount, setOpenDialogAccount] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      {openDialogAccount && (
        <DialogAccount
          visible={openDialogAccount}
          setVisible={setOpenDialogAccount}
        />
      )}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.txtWelcome}>
            Xin Chào {currentAccount?.fullname}!
          </Text>
          <Text style={styles.txtCurrentDate}>
            Ngày: {moment().format('DD/MM/YYYY')}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setOpenDialogAccount(true);
          }}
          style={styles.headerRight}>
          <Avatar.Image
            size={68}
            source={require('../../assets/images/avatar_default.jpg')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.containerScrollView}>
        <View style={styles.viewItems}>
          {constants.menus.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.navigation);
              }}
              key={index}
              style={styles.item}>
              <View style={styles.viewItem}>
                <Icon
                  type={Icons.MaterialCommunityIcons}
                  name={item.icon}
                  color={constants.colors.bluePopular}
                  size={48}
                />
                <Text numberOfLines={3} style={styles.txtLabel}>
                  {item.label}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const DialogAccount = ({visible, setVisible}) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await AsyncStorage.clear();
    dispatch(accountActions.accountLogOut());
  };
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}>
        <Dialog.Content>
          <Button
            style={styles.btnAccountInfo}
            mode="contained"
            icon="account"
            onPress={() => {
              setVisible(false);
            }}>
            Thông tin tài khoản
          </Button>
          <Button
            style={styles.btnLogout}
            mode="contained"
            icon="logout"
            onPress={() => {
              handleLogout();
            }}>
            Đăng xuất
          </Button>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};
