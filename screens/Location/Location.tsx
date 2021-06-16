import React, { FC, useEffect, useState } from "react"
import { SafeAreaView } from "react-native"
import { StackNavigationProp } from '@react-navigation/stack';

import { BASE_API_URL } from '../../globals'
import { LocationView } from "./LocationView"
import { Location, RootStackParamList } from '../../types'


type LocationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Location'
>

type LocationScreenProps = {
  navigation: LocationScreenNavigationProp,
}

export const LocationScreen: FC<LocationScreenProps> = ({ route, navigation })=> {
  const locationId = route.params.locationId
  const [location, setLocation] = useState<Location|undefined>()
  
  useEffect(() => {
    fetch(`${BASE_API_URL}/${locationId}`)
        .then(response => response.json())
        .then((data: Location) => setLocation(data))
  }, [])
  
  return (
    <SafeAreaView>
      <LocationView location={location} />
    </SafeAreaView>
  )
}
