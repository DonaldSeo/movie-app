import { useEffect, useState } from 'react'
import api from '../api'

export const useMovieList = (searchText) => {
  const [status, setStatus] = useState('idle')
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    if (!searchText) {
      setStatus('idle')
      setMovieList([])
      return
    }
    setStatus('fetching')
    api
      .fetchMovieList(searchText)
      .then((res) => {
        if (res.data.Response === 'True') {
          setMovieList(() => [...res.data.Search])
          setStatus('fetched')
        } else if (res.data.Response === 'False') {
          setStatus('failed')
        }
      })
      .catch((error) => {
        console.log(error)
        setStatus('error')
      })
  }, [searchText])

  return { status, movieList }
}
