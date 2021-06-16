import React, { FC, useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';

import { BASE_API_URL } from '../../globals'
import { Location, RootStackParamList } from '../../types'
import { HomeView } from './HomeView'


type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp
}

export const HomeScreen: FC<HomeScreenProps> = (props: HomeScreenProps) => {
  const { navigation } = props

  const [results, setResults] = useState<Location[]>([])
  const [query, setQuery] = useState<string>("")

  const onLocationSelected = (id: number) => {
    navigation.navigate('Location', { locationId: id })
  }

  const onQueryChange = (q: string) => {
    setQuery(q)
  }

  useEffect(() => {
    if (query.trim().length) {
      fetch(`${BASE_API_URL}?q=${query}`)
        .then(response => response.json())
        .then((data: Location[]) => setResults(data))
    } else {
      setResults([])
    }
  }, [query])

  return (
    <HomeView
      query={query}
      onLocationSelected={onLocationSelected}
      onQueryChange={onQueryChange}
      locations={results}
    />
  )
}
