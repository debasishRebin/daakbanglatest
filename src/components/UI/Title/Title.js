import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {utils} from '../../../globalStyles/utils';

const {width, height} = Dimensions.get('window');

export class Title extends PureComponent {
  render() {
    const {
      titleOne,
      titleTwo,
      mainTitleFontSize,
      subTitleFontSize,
      alignItems,
    } = this.props;
    return (
      <View
        style={[
          styles.titleContainer,
          {alignItems: alignItems ? alignItems : 'flex-start'},
        ]}>
        <Text
          style={[
            styles.titleOne,
            utils.fFamily,
            utils.titleColor,
            {
              fontSize: mainTitleFontSize
                ? width / mainTitleFontSize
                : width / 16,
            },
          ]}>
          {titleOne}
        </Text>
        <Text
          style={[
            styles.titleTwo,
            utils.titleColor,
            utils.fFamily,
            {
              fontSize: subTitleFontSize
                ? width / subTitleFontSize
                : width / 34,
            },
          ]}>
          {titleTwo}
        </Text>
      </View>
    );
  }
}

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleOne: {
    margin: 0,
    padding: 0,
    height: height / 25,
  },
  titleTwo: {
    // letterSpacing: 0.1,
    fontWeight: '600',
  },
});
