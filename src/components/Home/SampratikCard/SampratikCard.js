import React, {useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {IMG} from '../../../constants/Image';
import {samparatik} from '../../../data/home/sampratik/sampratik';
import {utils} from '../../../globalStyles/utils';

const {width, height} = Dimensions.get('screen');

export default SampratikCard = () => {
  const scrollRef = useRef();

  const onScroll = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    // get current position of the scrollView
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.carousel}
        onMomentumScrollEnd={onScroll}
        ref={scrollRef}>
        {samparatik.map((_, index) => (
          <View
            key={index}
            style={[styles.sampratikCard, index === 0 && utils.wrapperLeft]}>
            <View style={[styles.samBG]}>
              <Image
                source={IMG.IMAGE_SAMPRATIK_CARD_BG}
                style={[utils.sh100]}
                resizeMode="stretch"
              />
            </View>

            <View style={styles.imageOverlay}>
              <View style={[utils.sh100, styles.cardHeader]}>
                <Image
                  source={_.img}
                  style={[utils.sh100, styles.cardImgTop]}
                  resizeMode="stretch"
                />
              </View>
              <View style={styles.cardBody}>
                 <View>
                    
                 </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  sampratikCard: {
    position: 'relative',
    marginRight: 10,
    width: width / 1.19,
    height: width / 1.8,
  },

  samBG: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'red',
    overflow: 'hidden',
    borderRadius: 10,
  },
  cardImgTop: {
    borderTopRightRadius: 2.3,
    borderTopLeftRadius: 2.3,
    borderColor: 'red',
    height: '100%',
  },
  title: {fontSize: 24},
  carousel: {},

  lastItem: {
    marginLeft: 70,
    marginRight: 10,
  },
  imageOverlay: {
    marginTop: 4,
    overflow: 'hidden',
    height: '65%',
  },
  // image: {
  //   height: '80%',
  //   width: '100%',
  // },
  itemContent: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
  cardHeader: {
    // width: '100%',
    // height: '65%',
  },
});
