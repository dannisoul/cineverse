import { ThumbUp } from "@shared/icons/Icons";

export function MediaCard ({image, title, date, language, vote_average}: {image: string, title: string, date: string, language: string, vote_average: string}) {
    return (
        <article className="flex flex-col gap-4 w-full">
            <img 
                className="w-full aspect-[2/3] object-cover rounded-lg"
                src={image} 
                alt={`Poster for ${title}`} />
            <div className="flex justify-between gap-2">
                <span className="font-semibold line-clamp-1">{title}</span>
                <span className="font-medium text-cyan-600">{date}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="uppercase text-xs font-bold border-[2px] border-white text-cyan-600 px-2">{language}</span>
                <span className="text-cyan-600 flex items-center gap-2">
                    <ThumbUp />
                    <span className="text-xs text-white font-medium">{vote_average}</span>
                </span>
            </div>
        </article>
    )
}