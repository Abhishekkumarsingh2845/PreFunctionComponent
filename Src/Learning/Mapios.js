import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapViewComponent = () => {
  const initialRegion = {
    latitude: 28.62690181633405,
    longitude: 77.37747715122136,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="My Marker"
          description="This is a description of the marker"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapViewComponent;
