import { MediaCard } from "@src/shared/components/MediaCard"
import type { TrendingTvResponse } from "@src/types/trending-tv"

const response = await fetch(import.meta.env.PUBLIC_BASE_URL + `api/trending?mediaType=tv`)
const data: TrendingTvResponse | ErrorResponse = await response.json()

export function TrendingShows () {

    if("error" in data) return

    return (
        <section className="max-w-6xl w-11/12 mx-auto py-16">
            <h3 className="text-cyan-600 font-semibold">Online Streaming</h3>
            <h2 className="text-3xl font-bold">Top Tv Shows</h2>
            <div className="media-grid mt-16">
                {data.results.map(media => (
                    <MediaCard 
                        key={`Top-Show-${media.id}`}
                        date={media.first_air_date.substring(0,4)}
                        image={`http://image.tmdb.org/t/p/w342/${media.poster_path}`}
                        language={media.original_language}
                        title={media.name}
                        vote_average={media.vote_average.toFixed(2)}

                    />
                ))}
            </div>
        </section>
    )
}