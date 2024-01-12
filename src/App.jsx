import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch';

function App() {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChance = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Test: Movie search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input value={search} onChange={handleChance} placeholder='Avenger, Titanic, ...'
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
          />
          <button>Search</button>
        </form>
      </header>

      <main>
        {
          <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
//8ecc0370