import { MediaCard } from "@src/features/shared/components/MediaCard"
import { Paginator } from "@src/features/shared/components/Paginator"
import { usePaginator } from "@src/features/shared/hooks/usePaginator"
import { usePopularMovies } from "../hooks/usePopularMovies"

export function PopularMovies () {

    const { currentPage, updatePage} = usePaginator()
    const { data } = usePopularMovies({ currentPage })

    if(data === undefined) return
    return (    
        <section className="max-w-6xl py-16 w-11/12 mx-auto">
                <h3 className="text-cyan-600 font-semibold">Online Streaming</h3>
                <h2 className="text-3xl font-bold">Popular Movies</h2>
                <div className="media-grid my-16">
                    {
                        data.results.map(movie => (
                            <MediaCard 
                                key={`popular-movie-${movie.id}`}
                                date={movie.release_date.substring(0,4)}
                                image={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                                language={movie.original_language}
                                title={movie.title}
                                vote_average={movie.vote_average.toFixed(2)}
                            />
                        ))
                    }
                </div>
                <Paginator 
                    currentPage={currentPage}
                    onPageChange={updatePage}
                    totalPages={500}
                    visiblePages={5}/>

        </section>
    )
}