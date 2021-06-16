import React from 'react'
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'

import { Location } from '../../types'
import styles from './styles'


type HomeViewProps = {
  locations: Location[]
  onLocationSelected: (id: number) => void
  onQueryChange: (q: string) => void
  query: string
}

export const HomeView = (props: HomeViewProps) => {
  const { locations, onLocationSelected, onQueryChange, query } = props

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Location"
        style={styles.searchBox}
        value={query}
        onChangeText={onQueryChange}
      />

      {locations.map((location: Location) => (
        <Pressable
          key={location.id}
          onPress={() => onLocationSelected(location.id)}
          style={styles.result}
        >
          <Text>{location.name}</Text>
        </Pressable>
      ))}
    </SafeAreaView>
  )
}
