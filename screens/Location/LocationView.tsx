import React from "react"
import { Text, View} from "react-native"
import MapView, { Marker } from "react-native-maps"

import { LocationFull } from "../../types"
import styles from "./styles"


type LocationViewProps = {
  location: LocationFull
}

export const LocationView = (props: LocationViewProps) => {
  const { location } = props
  const markers = [
    {
      latitude: location.latitude,
      longitude: location.longitude,
      title: location.name,
    }
  ];

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{location.name}</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude
          }}
          title={location.name}
        />
      </MapView>
      
    </>
  )
}