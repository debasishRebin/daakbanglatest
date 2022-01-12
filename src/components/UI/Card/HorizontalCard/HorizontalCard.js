import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {IMG} from '../../../../constants/Image';
import {utils} from '../../../../globalStyles/utils';

const {height, width} = Dimensions.get('window');

const HorizontalCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <ImageBackground
        borderRadius={8}
        source={IMG.IMAGE_DEKHASHONA_BG}
        style={styles.backgroundImg}>
        <Image source={item.img} style={styles.img} />
        <View style={styles.cardInfo}>
          <Text style={[styles.title, utils.fFamily]}>{item.title}</Text>
          <Text style={[styles.date, utils.fFamily]}>{item.date}</Text>
          <Text style={[styles.subTitle, utils.fFamily]}>{item.subTitle}</Text>
          <Text style={[styles.description, utils.fFamily]}>
            {item.content}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
  backgroundImg: {
    height: 140,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4.5,
    marginBottom: 12,
  },
  img: {
    height: '100%',
    width: width / 2.5,
    resizeMode: 'cover',
  },
  cardBody: {},
  cardInfo: {
    flex: 1,
    paddingLeft: width / 25,
    paddingRight: width / 35,
    marginBottom: 8,
  },
  description: {
    fontSize: width / 65,
    color: '#5d3a27',
    lineHeight: width / 30,
  },
  title: {
    color: '#5d3a27',
    fontSize: width / 40,
  },
  date: {
    color: '#a65a00',
    fontSize: width / 45,

    letterSpacing: 0.2,
  },
  subTitle: {
    color: '#bf3121',
    marginVertical: 5,
    fontSize: width / 30,
  },
});
