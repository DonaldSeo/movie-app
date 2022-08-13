import { useEffect, useState } from 'react'
import api from '../api'

export const useMovieDetail = (movieId) => {
  const [status, setStatus] = useState('idle')
  const [selectedMovieDetail, setSelectedMovieDetail] = useState()

  useEffect(() => {
    if (!movieId) {
      setStatus('idle')
      return
    }
    setStatus('fetching')
    api
      .fetchMovieDetail(movieId)
      .then((res) => {
        setSelectedMovieDetail(res.data)
      })
      .then(() => {
        setStatus('fetched')
      })
      .catch((error) => {
        console.log(error)
        setStatus('error')
      })
  }, [movieId])

  return { status, selectedMovieDetail }
}
