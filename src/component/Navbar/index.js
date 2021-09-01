import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.navbarWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Entypo name="home" size={29} />
      </TouchableOpacity>
      <Ionicons name="search-outline" size={29} />
      <MaterialIcons name="ondemand-video" size={29} />
      <Feather name="shopping-bag" size={29} />
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          style={styles.userProfile}
          source={require('../../assets/profile/Profile1.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarWrapper: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    paddingVertical: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 9,
  },
  userProfile: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});

export default Navbar;
