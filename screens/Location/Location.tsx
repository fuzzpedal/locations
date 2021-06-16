import React, { FC, useEffect, useState } from "react"
import { SafeAreaView, Text } from "react-native"
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

import { BASE_API_URL } from '../../globals'
import { LocationView } from "./LocationView"
import { LocationFull, RootStackParamList } from '../../types'


type LocationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Location'
>

type LocationScreenRouteProp = RouteProp<RootStackParamList, 'Location'>;

type LocationScreenProps = {
  navigation: LocationScreenNavigationProp,
  route: LocationScreenRouteProp,
}

export const LocationScreen: FC<LocationScreenProps> = ({ route })=> {
  const locationId = route.params.locationId
  const [location, setLocation] = useState<LocationFull|undefined>()
  
  useEffect(() => {
    fetch(`${BASE_API_URL}/${locationId}`)
        .then(response => response.json())
        .then((data: LocationFull) => setLocation(data))
  }, [])
  
  return (
    <SafeAreaView>
      {
        location
        ? <LocationView location={location} />
        : <Text>Loading...</Text>
      }
    </SafeAreaView>
  )
}
