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
      label: 'Lệnh A',
      navigation: 'Product',
    },
    {
      label: 'Lệnh B',
      navigation: 'Product',
    },
    {
      label: 'Lệnh C',
      navigation: 'Product',
    },
    {
      label: 'Lệnh D',
      navigation: 'Product',
    },
    {
      label: 'Lệnh E',
      navigation: 'Product',
    },
    {
      label: 'Lệnh F',
      navigation: 'Product',
    },
    {
      label: 'Lệnh G',
      navigation: 'Product',
    },
    {
      label: 'Lệnh H',
      navigation: 'Product',
    },
    {
      label: 'Lệnh I',
      navigation: 'Product',
    },
    {
      label: 'Lệnh J',
      navigation: 'Product',
    },
    {
      label: 'Lệnh K',
      navigation: 'Product',
    },
  ];

  const {wareHouseName} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.txtTitle}>Lệnh sản xuất kho {wareHouseName}</Text>
      <ScrollView style={styles.containerScrollView}>
        <View style={styles.viewItems}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(item.navigation, {
                    productionCommandName: item.label,
                  });
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
