export type Location = {
  id: number
  name: string
}

export type LocationFull = Location & {
  latitude: number
  longitude: number
}

export type RootStackParamList = {
  Home: undefined
  Location: { locationId: number }
}
