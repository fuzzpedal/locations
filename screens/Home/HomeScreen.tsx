import React, { FC, useEffect, useRef, useState } from 'react'
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

  const lastAbortController = useRef()

  const onLocationSelected = (id: number) => {
    navigation.navigate('Location', { locationId: id })
  }

  const onQueryChange = (q: string) => {
    setQuery(q)
  }

  useEffect(() => {
    if (query.trim().length) {
      if (lastAbortController.current) {
        lastAbortController.current.abort()
      }

      const currentAbortController = new AbortController()
      lastAbortController.current = currentAbortController

      fetch(`${BASE_API_URL}?q=${query}`, {
        signal: currentAbortController.signal,
      })
        .then(response => {
            return response.json()
        })
        .then((data: Location[]) => {
          if (currentAbortController.signal.aborted) {
            setResults([])
            return
          }
          setResults(data)
        }, e => {
          console.log(e)
        })
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
