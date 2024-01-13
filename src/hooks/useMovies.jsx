import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/moviesServices'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const prevSearch = useRef(search)

  const getMovies = useCallback( async ({search}) => {
      if (search === prevSearch.current) return
      try {
        setLoading(true)
        //setError(null)
        prevSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        console.log(e.message)
      }
      finally {
        setLoading(false)
      }
    
  }, [search])

  // const getSortedMovies = () => {
  //   console.log('sorted')
  //   const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  //   return sortedMovies
  // }

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}