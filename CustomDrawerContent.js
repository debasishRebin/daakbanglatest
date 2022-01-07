import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Avatar from './src/components/Sidebar/Avatar/Avatar';
import SocialIcon from './src/components/Sidebar/SocialIcon/SocialIcon';
import AccordionListItem from './src/components/UI/Accordion/AccordionListItem/AccordionListItem';
import {IMG} from './src/constants/Image';
import {drawerItems} from './src/data/sidebar/sidebar';
import {utils} from './src/globalStyles/utils';

const {width, height} = Dimensions.get('screen');

const CustomDrawerContent = () => {
  const [sidebarItem, setSidebarItem] = useState(drawerItems);

  const toggleExpanded = item => {
    const tempSidebarItems = [...drawerItems];
    tempSidebarItems.map(drawerItem =>
      drawerItem.id === item.id
        ? (drawerItem.isSelected = !drawerItem.isSelected)
        : (drawerItem.isSelected = true),
    );

    setSidebarItem(tempSidebarItems);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={IMG.IMAGE_LOGIN_BG} style={styles.loginBg}>
        <View style={styles.avatarContainer}>
          <Avatar />
        </View>
        <ScrollView
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={[styles.sidebarItems]}>
            {sidebarItem.map(drawerItem => (
              <View
                key={drawerItem.id}
                style={[styles.sidebarItem, utils.center]}>
                <AccordionListItem
                  title={drawerItem.title}
                  isList={drawerItem.isDropdown}
                  collapsed={drawerItem.isSelected}
                  toggleExpanded={() => toggleExpanded(drawerItem)}
                />
              </View>
            ))}
          </View>
          <SocialIcon />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  loginBg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  drawerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 20,
    width: '80%',
  },
  avatarContainer: {
    height: 150,
    justifyContent: 'center',
  },
  sidebarItems: {
    marginVertical: 20,
  },
  sidebarItem: {
    width: '100%',
    paddingVertical: 0,
  },

  drawerIcon: {
    height: height / 30,
    width: width / 25,
    resizeMode: 'contain',
    flex: 1,
  },
  drawerItem: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hrRule: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
});
