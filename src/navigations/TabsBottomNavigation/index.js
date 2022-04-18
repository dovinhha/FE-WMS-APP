import React, {useRef, createRef, useState} from 'react';
import {TouchableOpacity, View, Animated} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Home from '../../screens/Home';
import Icon, {Icons} from '../../components/Icons';
import constants from '../../constants';

import styles from './styles';

const buttonSize = new Animated.Value(1);

const handlePress = () => {
  Animated.sequence([
    Animated.timing(buttonSize, {
      toValue: 0.9,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(buttonSize, {
      toValue: 1,
      useNativeDriver: true,
    }),
  ]).start();
};
const CustomTabBarButton = () => {
  const navigation = useNavigation();

  const sizeStyle = {
    transform: [{scale: buttonSize}],
  };

  return (
    <View style={styles.buttonHistory}>
      <Animated.View style={[styles.customButton, sizeStyle]}>
        <TouchableOpacity
          onPress={() => {
            handlePress();
            // navigation.navigate("HistoryStack");
          }}>
          <Animated.View>
            <Icon
              type={Icons.MaterialCommunityIcons}
              name="qrcode-scan"
              color={constants.colors.bluePopular}
            />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const TabBottomNavigation = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          backgroundColor: constants.colors.bluePopular,
          borderRadius: 10,
          height: 60,
          // ...styles.shadow,
        },
      }}>
      <Tab.Screen
        options={{tabBarButton: props => <CustomTabBarButton {...props} />}}
        name="Home"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default TabBottomNavigation;
