import React from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMG} from '../../../constants/Image';
import {dekhaShona} from '../../../data/home/dekhashona/dekhashona';
import {utils} from '../../../globalStyles/utils';
import BtnPrimary from '../../UI/Button/BtnPrimary/BtnPrimary';
import HorizontalCard from '../../UI/Card/HorizontalCard/HorizontalCard';
import Title from '../../UI/Title/Title';

const {height, width} = Dimensions.get('window');

const Dekhashona = () => {
  return (
    <View style={styles.container}>
      <View style={utils.wrapperPadding}>
        <View style={styles.header}>
          <View style={styles.heading}>
            <Title
              titleOne="দেখাশোনা"
              titleTwo="সাম্প্রতিক লেখা"
              isSecondary={true}
            />
          </View>
          <View style={styles.btnDekhashona}>
            <BtnPrimary btnTitle="দেখাশোনা" />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            data={dekhaShona}
            keyExtractor={item => item.img}
            renderItem={({item}) => <HorizontalCard item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Dekhashona;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    backgroundColor: '#4f3431',
    paddingVertical: width / 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width / 10,
  },
  btnDekhashona: {
    width: width / 4,
    height: width / 12,
  },
  btnImage: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  btn: {
    borderRadius: 10,
  },
  btnText: {
    fontSize: width / 26,
    fontWeight: '600',
    color: '#fff',
  },
  headerText: {
    fontSize: width / 15,
    color: '#fff',
  },
  cardContainer: {
    width: '100%',
  },
});
