import type { PopularMoviesResponse } from "@src/types/popular-movies"
import { useEffect, useState } from "react"

export function usePopularMovies ({currentPage}: {currentPage: number}) {
    const [data, setData] = useState<PopularMoviesResponse>()

    useEffect(() => {
        
        fetch(import.meta.env.PUBLIC_BASE_URL + `api/popular?mediaType=movie&page=${currentPage}`)
            .then(response => response.json())
            .then((data: PopularMoviesResponse | ErrorResponse) => {
                console.log(data)
                if("error" in data) return
                setData(data)
            })
        
    }, [currentPage])

    return {
        data
    }
}