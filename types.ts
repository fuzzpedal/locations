export type Location = {
  id: number
  name: string
  latitude?: number
  longitude?: number
}

export type RootStackParamList = {
  Home: undefined
  Location: { locationId: number }
}
