import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { BASE_API_URL } from '../../globals'
import { Location } from '../../types'
import { HomeView } from './HomeView'


export const HomeScreen = () => {
  const [results, setResults] = useState<Location[]>([])
  const [query, setQuery] = useState<string>("")

  const onLocationSelected = (id: number) => {
    Alert.alert(`${id} selected`)
  }

  const onQueryChange = (q: string) => {
    setQuery(q)
  }

  useEffect(() => {
    if (query.trim().length) {
      fetch(`${BASE_API_URL}?q=${query}`)
        .then(response => response.json())
        .then((data: Location[]) => setResults(data));
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
