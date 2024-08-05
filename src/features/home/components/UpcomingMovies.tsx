import { MediaCard } from "@shared/components/MediaCard"
import type { UpcomingMoviesResponse } from "@src/types/upcoming-movies"

const response = await fetch(import.meta.env.PUBLIC_BASE_URL + `api/upcoming?mediaType=movie`)
const data: UpcomingMoviesResponse | ErrorResponse = await response.json()

export function UpcomingMovies () {

    if("error" in data) return
    return (
        
        <section className="max-w-6xl w-11/12 mx-auto py-16">
            <h3 className="text-cyan-600 font-semibold">Online Streaming</h3>
            <h2 className="text-3xl font-bold">Upcoming Movies</h2>
            <div className="media-grid mt-16">
                {data.results.map(media => (
                    <MediaCard
                        key={`Upcoming-Movie-${media.id}`}
                        date={media.release_date.substring(0,4)}
                        image={`http://image.tmdb.org/t/p/w342/${media.poster_path}`}
                        language={media.original_language}
                        title={media.title}
                        vote_average={media.vote_average.toFixed(2)}
                    />
                ))}
            </div>
        </section>
    )
}