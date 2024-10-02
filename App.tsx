import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './src/screens/Login/Login';
import {CategoryProducts} from './src/screens/Category_products/CategoryProducts';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {Checkout} from './src/screens/Checkout/Checkout';
// import {AddAddress} from './src/screens/Address/AddAddress';
// import {DeliveryScreen} from './src/screens/Delivery/DeliveryScreen';
import {Profile} from './src/screens/Profile/Profile';
import {YourOrders} from './src/screens/YourOrders/YourOrders';
import {Wishlist} from './src/screens/Wishlist/Wishlist';
import {Search} from './src/screens/Search/Search';
import {Home} from './src/screens/Home/Home';
import { AddAddress } from './src/screens/Address/AddAddress';
import { DeliveryScreen } from './src/screens/Delivery/DeliveryScreen';

const App = (): JSX.Element => {
  // const [randomColor,setRandomColor] = useState('white');

  // const handleColor = () => {
  //   let hexRange = '0123456789ABCDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     const hexindex = Math.floor(Math.random() * hexRange.length)
  //     color += hexRange[hexindex];

  //   }
  //   console.log(color);
  //   setRandomColor(color);
  // };
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* <StatusBar backgroundColor={randomColor}/>
      <View style={[styles.container,{backgroundColor:randomColor}]}>
        <TouchableOpacity style={styles.button} onPress={handleColor}>
          <Text style={{color: 'white'}}>Click Me</Text>
        </TouchableOpacity>
      </View> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Category"
              component={CategoryProducts}
              options={({route, navigation}) => ({
                title: route?.params?.category,
                headerTitleStyle: {
                  fontSize: 20,
                },
                headerRight: () => (
                  <MagnifyingGlassIcon
                    color="black"
                    size="30"
                    onPress={() => {
                      navigation.navigate('Search');
                    }}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={({route}) => ({
                headerRight: () => (
                  <View>
                    <Text
                      style={{
                        color: 'green',
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}>
                      Share
                    </Text>
                  </View>
                ),
              })}
            />
            <Stack.Screen name="Add Address" component={AddAddress} />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Your Orders" component={YourOrders} />
            <Stack.Screen name="Wishlist" component={Wishlist} />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 10,
  },
});
