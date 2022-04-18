import React, {useEffect} from 'react';
import {Provider as StoreProvider, useDispatch, useSelector} from 'react-redux';
import store from './Store';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';
import {accountActions} from './Redux/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from './constants';
import _ from 'lodash';

const Stack = createNativeStackNavigator();

const RootStackScreen = () => {
  const dispatch = useDispatch();
  const {currentAccount} = useSelector(state => state.accountReducer);
  const handleGetCurrentAccount = async () => {
    const token = await AsyncStorage.getItem(constants.storageKeys.token);
    if (!_.isEmpty(token)) {
      dispatch(accountActions.getCurrentAccount({}));
    }
  };
  useEffect(() => {
    handleGetCurrentAccount();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        headerMode="none">
        {_.isEmpty(currentAccount) ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{
              gestureEnabled: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="MainStack"
            component={MainStack}
            options={{
              gestureEnabled: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <RootStackScreen />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
