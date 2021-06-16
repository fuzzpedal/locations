import React from "react"
import { Text } from "react-native"
import { Location } from "../../types"


type LocationViewProps = {
  location: Location | undefined
}

export const LocationView = (props: LocationViewProps) => {
  const { location } = props

  return (
      <Text>{location?.name}</Text>
  )
}