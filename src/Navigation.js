import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreeen from './screens/Home';
import ProfileScreen from './screens/Profile';
import DirectMessageScreen from './screens/DirectMessage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <View style={styles.appWprapper}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreeen}
            options={{ headerShown: false, gestureEnabled: true }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DirectMessage"
            component={DirectMessageScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  appWprapper: {
    flex: 1,
  },
});

export default Navigation;
