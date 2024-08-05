import type { PopularTvResponse } from "@src/types/popular-tv";
import { useEffect, useState } from "react";

export function usePopularTvShows({currentPage}: {currentPage: number}) {
    const [data, setData] = useState<PopularTvResponse>()

    useEffect(() => {
        
        fetch(import.meta.env.PUBLIC_BASE_URL + `api/popular?mediaType=tv&page=${currentPage}`)
            .then(response => response.json())
            .then((data: PopularTvResponse | ErrorResponse) => {
                if("error" in data) return
                setData(data)
            })
        
    }, [currentPage])

    return {
        data
    }
}