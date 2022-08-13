import React, { useState, useCallback } from 'react'
import _ from 'lodash'
import MovieCard from '../components/MovieCard'
import MovieDetailCard from '../components/MovieDetailCard'
import { useMovieList } from '../hooks/useMovieList'
import { movieIcon, searchIcon, movieNotFound } from '../resources/images'

import {
  Container,
  AppName,
  Header,
  SearchBox,
  SearchIcon,
  MovieImage,
  SearchInput,
  MovieListContainer,
  Placeholder,
  MovieNotFoundImage,
  Spinner
} from './styles'

const MainScreen = () => {
  const [searchQuery, updateSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const { status, movieList } = useMovieList(debouncedSearchQuery)

  const [selectedMovie, setSelectedMovie] = useState()

  const debounce = useCallback(
    _.debounce((_searchVal) => {
      setDebouncedSearchQuery(_searchVal)
    }, 1000),
    []
  )

  const onTextChange = (e) => {
    setSelectedMovie('')
    updateSearchQuery(e.target.value)
    debounce(e.target.value)
  }

  const renderMovieList = () => {
    switch (status) {
      case 'idle':
        return <Placeholder src={searchIcon} />
      case 'fetching':
        return <Spinner />
      case 'fetched':
        return movieList.map((movie, index) => (
          <MovieCard key={index} movie={movie} setSelectedMovie={setSelectedMovie} />
        ))
      case 'failed':
        return <MovieNotFoundImage src={movieNotFound} />
      default:
        return <Placeholder src={searchIcon} />
    }
  }

  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src={movieIcon} />
        </AppName>
        <SearchBox>
          <SearchIcon src={searchIcon} />
          <SearchInput placeholder="Search Movie" value={searchQuery} onChange={onTextChange} />
        </SearchBox>
      </Header>
      {selectedMovie && (
        <MovieDetailCard selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      )}
      <MovieListContainer>{renderMovieList()}</MovieListContainer>
    </Container>
  )
}

export default MainScreen
