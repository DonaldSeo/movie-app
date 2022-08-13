import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  MovieDetailContainer,
  CoverImage,
  InfoColumn,
  MovieName,
  MovieInfo,
  Close,
  LoadingSpinner
} from './styles'
import { useMovieDetail } from '../../hooks/useMovieDetail'
import { noImageIcon } from '../../resources/images'

const MovieDetailCard = ({ selectedMovie, setSelectedMovie }) => {
  const { status, selectedMovieDetail } = useMovieDetail(selectedMovie)

  let coverImage
  if (selectedMovieDetail?.Poster === 'N/A') {
    coverImage = noImageIcon
  } else {
    coverImage = selectedMovieDetail?.Poster
  }

  return (
    <Container>
      {status === 'fetched' ? (
        <MovieDetailContainer>
          <CoverImage src={coverImage} alt={selectedMovieDetail?.Title} />
          <InfoColumn>
            <MovieName>
              {selectedMovieDetail?.Type}: <span>{selectedMovieDetail?.Title}</span>
            </MovieName>
            <MovieInfo>
              IMDB Rating: <span>{selectedMovieDetail?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{selectedMovieDetail?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{selectedMovieDetail?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{selectedMovieDetail?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{selectedMovieDetail?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{selectedMovieDetail?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{selectedMovieDetail?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{selectedMovieDetail?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{selectedMovieDetail?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{selectedMovieDetail?.Plot}</span>
            </MovieInfo>
          </InfoColumn>
        </MovieDetailContainer>
      ) : (
        <LoadingSpinner />
      )}
      <Close onClick={() => setSelectedMovie()}>X</Close>
    </Container>
  )
}

MovieDetailCard.propTypes = {
  selectedMovie: PropTypes.string,
  setSelectedMovie: PropTypes.func
}

export default MovieDetailCard
