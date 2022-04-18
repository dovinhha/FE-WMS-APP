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

const WareHouse = ({navigation}) => {
  const data = [
    {
      label: 'Kho A',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho B',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho C',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho D',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho E',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho F',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho G',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho H',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho I',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho J',
      navigation: 'ProductionCommand',
    },
    {
      label: 'Kho K',
      navigation: 'ProductionCommand',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.txtTitle}>Danh sách kho nhập</Text>
      <ScrollView style={styles.containerScrollView}>
        <View style={styles.viewItems}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(item.navigation, {
                    wareHouseName: item.label,
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
