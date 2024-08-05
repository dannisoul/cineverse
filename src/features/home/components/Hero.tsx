import { Calendar } from '@shared/icons/Icons'
import '../styles/Hero.css'
import type { TrendingAllResponse } from '@src/types/trending-all'

const response = await fetch(import.meta.env.PUBLIC_BASE_URL + "api/trending?mediaType=all")
const data : TrendingAllResponse | ErrorResponse = await response.json()

export function Hero(){
    
    if(("error" in data)) return
    const topTrendingItem = data.results[0]

    return (
        <section className="hero-container ">
            <div className="absolute inset-0 bg-black/50"></div>
            <img
                className="w-full sm:w-1/2 object-top h-screen absolute right-0 -z-10 aspect-[2/3] object-cover poster"
                    src={`http://image.tmdb.org/t/p/original/${topTrendingItem?.poster_path}`} alt="" />
            <div className="hero flex items-center bg-center">
                <div className="w-8/12 mx-auto media-info">
                    <h3 className="text-2xl font-bold text-emerald-500 fade-in">Most Popular</h3>
                    <h2 className="text-4xl xl:text-6xl font-bold max-w-2xl leading-snug fade-in text-pretty media-title">{topTrendingItem?.title ?? topTrendingItem?.name}</h2>
                    <div className="flex items-center justify-between w-fit gap-4 mt-6 fade-in media-details">
                        <div className="flex gap-2 items-center">
                            <span className="uppercase text-[10px] bg-white border-2 border-white text-black px-2 font-bold">{topTrendingItem?.original_language}</span>
                            <span className="uppercase text-[10px] border-2 border-white px-2 font-bold">HD</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Calendar />
                            <span className="text-xs font-bold">{topTrendingItem?.release_date?.substring(0,4) ?? topTrendingItem?.first_air_date?.substring(0,4)}</span>
                        </div>
                    </div>
                    <a 
                        className="mt-8  block  w-fit bg-[#12151e] px-12 py-4 rounded-full border-2 border-emerald-500 hover:bg-emerald-500 transition-all fade-in watch-now"
                        href="/">Watch Now</a>
                </div>
            </div>
        </section>
    )
}


