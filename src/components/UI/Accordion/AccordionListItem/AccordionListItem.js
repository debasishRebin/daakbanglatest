// import React in our code
import React, {useState} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

//import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';
import {IMG} from '../../../../constants/Image';
import {utils} from '../../../../globalStyles/utils';

const {width} = Dimensions.get('screen');

const AccordionListItem = ({title, collapsed, toggleExpanded, isList}) => {
  return (
    <View style={[styles.drawerItemContainer, utils.center]}>
      <View style={[styles.drawerItemSub]}>
        <TouchableOpacity
          style={[styles.drawerContainer]}
          onPress={toggleExpanded}>
          <View style={styles.drawerItem}>
            <Text
              style={[
                styles.drawerItemText,
                utils.fFamily,
                utils.fPrimaryColor,
              ]}>
              {title}
            </Text>
            {isList ? (
              <View>
                {collapsed ? (
                  <Image source={IMG.IMAGE_PLUS} style={styles.drawerIcon} />
                ) : (
                  <Image source={IMG.IMAGE_MINUS} style={styles.drawerIcon} />
                )}
              </View>
            ) : (
              <View></View>
            )}
          </View>
        </TouchableOpacity>

        {isList && (
          <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>
              <Text style={[utils.fPrimaryColor, styles.dummy]}>
                This is a dummy text
              </Text>
            </View>
          </Collapsible>
        )}
      </View>
    </View>
  );
};

export default AccordionListItem;

const styles = StyleSheet.create({
  drawerItemContainer: {},
  drawerItemSub: {},
  drawerContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
  },

  drawerIcon: {
    // height: height / 36,
    width: width / 40,
    resizeMode: 'contain',
    flex: 1,
    paddingVertical: 10,
  },
  drawerItem: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  drawerItemText: {
    flex: 3,
    color: '#828282',
    marginLeft: 10,
    fontSize: width / 25,
    fontFamily: 'Poppins',
  },
  dummy: {
    paddingVertical: 15,
  },
  content: {
    paddingHorizontal: 28,
    paddingVertical: 5,
  },
});
