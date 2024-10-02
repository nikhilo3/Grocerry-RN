import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import {SearchBar} from '../../components/SearchBar';
// import {mapKey} from '../../constants/environment';
// import MapboxGL from '@rnmapbox/maps';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {LocationData} from './LocationData';
import {EnterAddress} from './EnterAddress';

// MapboxGL.setAccessToken(mapKey);
// //MapboxGL.setConnected(true);
// MapboxGL.setTelemetryEnabled(false);
// MapboxGL.setWellKnownTileServer('Mapbox');
Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'auto',
});

export const AddAddress = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [show, setShow] = useState(false);
  const [locationData, setLocationData] = useState([]);
  const [coords, setCoords] = useState({
    lon: 12,
    lat: 36,
  });

  async function getPermissionLocation() {
    try {
      const geo = await Geolocation.getCurrentPosition(
        info =>
          setCoords({
            lon: info?.coords?.longitude,
            lat: info?.coords?.latitude,
          }),
        err => console.log(err),
        {enableHighAccuracy: true},
      );
      // console.log(geo);
    } catch (error) {
      console.error('Error getting location', error);
    }
  }



  useEffect(() => {
    getPermissionLocation();
    console.log(locationData);
  }, []);

  return (
    <>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View>
          <SearchBar place={'Start Typing to search'} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: screenHeight * 0.63,
              width: screenWidth,
            }}>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: screenHeight * 0.4,
            width: screenWidth,
            padding: 20,
            gap: 10,
          }}>
          <LocationData locationData={locationData} />
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              padding: 15,
              borderRadius: 10,
            }} onPress={() => setShow(!show)} >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                
              }}>
              {' '}
              Enter complete address{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <EnterAddress show={show} setShow={setShow} longitude={coords?.lon} latitude={coords?.lat} />
    </>
  );
};
