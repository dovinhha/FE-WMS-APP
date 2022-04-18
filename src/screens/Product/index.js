import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';

const WareHouse = ({navigation, route}) => {
  const data = [
    {
      label: 'Sản phẩm A',
      navigation: '',
    },
    {
      label: 'Sản phẩm B',
      navigation: '',
    },
    {
      label: 'Sản phẩm C',
      navigation: '',
    },
    {
      label: 'Sản phẩm D',
      navigation: '',
    },
    {
      label: 'Sản phẩm E',
      navigation: '',
    },
    {
      label: 'Sản phẩm F',
      navigation: '',
    },
    {
      label: 'Sản phẩm G',
      navigation: '',
    },
    {
      label: 'Sản phẩm H',
      navigation: '',
    },
    {
      label: 'Sản phẩm I',
      navigation: '',
    },
    {
      label: 'Sản phẩm J',
      navigation: '',
    },
    {
      label: 'Sản phẩm K',
      navigation: '',
    },
  ];

  const {productionCommandName} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.txtTitle}>
        Các sản phẩm lệnh {productionCommandName}
      </Text>
      <ScrollView style={styles.containerScrollView}>
        <View style={styles.viewItems}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(item.navigation);
                }}
                key={index}
                style={styles.item}>
                <View style={styles.viewItem}>
                  <Text style={styles.txtLabel}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WareHouse;
