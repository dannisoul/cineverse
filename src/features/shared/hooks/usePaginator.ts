import { useState } from "react";

export function usePaginator () {
    
    const [currentPage, setCurrentPage] = useState(1)

    function updatePage(newPage: number){
        setCurrentPage(newPage)
    }

    return {
        currentPage,
        updatePage
    }
}