import axios from 'axios'
import { OMDB_URL_ENDPOINT } from './constants'

const fetchMovieList = async (searchText) => {
  const response = await axios.get(OMDB_URL_ENDPOINT, {
    params: {
      s: searchText,
      apikey: process.env.REACT_APP_OMDB_API_KEY
    }
  })
  return response
}

const fetchMovieDetail = async (movieId) => {
  const response = await axios.get(OMDB_URL_ENDPOINT, {
    params: {
      i: movieId,
      apikey: process.env.REACT_APP_OMDB_API_KEY
    }
  })
  return response
}

export default {
  fetchMovieList,
  fetchMovieDetail
}
