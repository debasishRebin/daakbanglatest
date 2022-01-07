import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {IMG} from '../../../constants/Image';
import {drawerItems} from '../../../data/sidebar/sidebar';
import {utils} from '../../../globalStyles/utils';

const {width} = Dimensions.get('window');
export class UpperTabbar extends PureComponent {
  render() {
    return (
      <View style={styles.tabBar}>
        <View style={styles.upperFooterBg}>
          <Image
            source={IMG.IMAGE_BUTTON}
            style={[styles.socialImg]}
            resizeMode="contain"
          />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          overScrollMode="never"
          pagingEnabled>
          {drawerItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.upperFooterItem, utils.fFamily]}>
              <Text style={styles.upperFooterText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default UpperTabbar;

const styles = StyleSheet.create({
  tabBar: {
    paddingVertical: 5,
    position: 'relative',
  },
  upperTabbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upperFooterItem: {
    marginLeft: 15,
  },
  upperFooterText: {
    color: '#fff',
    fontSize: width / 30,
  },
  upperFooterBg: {
    position: 'absolute',
    top: 0,
    left: -6,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
