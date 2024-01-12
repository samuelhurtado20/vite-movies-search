import { useEffect, useState, useRef } from "react";

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirst = useRef(true)

    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = search === ''
            return
        }

        if (search === '') {
            setError('Search can not be empty')
            return
        }
        if (search.length < 3) {
            setError('At least 3 letters to search')
            return
        }
        setError(null)
    }, [search])

    return { search, updateSearch, error }
}