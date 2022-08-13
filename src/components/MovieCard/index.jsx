import React from 'react'
import PropTypes from 'prop-types'

import { noImageIcon } from '../../resources/images'

import { MovieContainer, CoverImage, MovieName, InfoColumn, MovieInfo } from './styles'

const MovieCard = ({ movie, setSelectedMovie }) => {
  const { Title, Year, imdbID, Type, Poster } = movie

  let coverImage
  if (Poster === 'N/A') {
    coverImage = noImageIcon
  } else {
    coverImage = Poster
  }

  return (
    <MovieContainer
      onClick={() => {
        setSelectedMovie(imdbID)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}>
      <CoverImage src={coverImage} alt={Title} />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year : {Year}</MovieInfo>
        <MovieInfo>Type : {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string
  }),
  setSelectedMovie: PropTypes.func
}

export default MovieCard
