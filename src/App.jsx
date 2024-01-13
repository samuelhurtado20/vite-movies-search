import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch';

function App() {
  const { search, updateSearch, error } = useSearch()
  const [ sort, setSort ] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
    getMovies()
  }

  const handleChance = (event) => {
    updateSearch(event.target.value)
  }

  const handleSort = () =>{
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Test: Movie search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input value={search} onChange={handleChance} placeholder='Avenger, Titanic, ...'
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button>Search</button>
        </form>
      </header>

      <main>
        {
          loading ? <h1>Loading...</h1> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
//8ecc0370