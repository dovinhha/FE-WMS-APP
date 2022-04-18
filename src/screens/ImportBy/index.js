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

const ImportBy = ({navigation}) => {
  const data = [
    {
      label: 'Nhập kho theo đơn đặt hàng',
      navigation: 'WareHouse',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
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

export default ImportBy;
