export const searchMovies = async ({ search }) => {
    if (search === '') return null
    try {
        const response = await fetch('https://www.omdbapi.com/?s=' + search + '&apikey=8ecc0370')
        const json = await response.json()

        return json.Search?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

    } catch (error) {
        throw new Error('Error searching movies')
    }
}