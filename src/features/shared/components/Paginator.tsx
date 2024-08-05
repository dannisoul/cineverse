import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "../icons/Icons"

export function Paginator (
    {visiblePages, totalPages, currentPage, onPageChange}:
    {visiblePages: number, totalPages: number, currentPage: number, onPageChange: (page: number) => void}
) {
    return (
        <ul className="flex divide-x-2 border-white border-2 divide-white max-w-6xl w-fit mx-auto text-xs sm:text-sm">
                    <li 
                        onClick={() => {
                            if(currentPage === 1) return
                            onPageChange(1)
                        }}
                        className={`sm:w-12 sm:h-10 w-8 h-10 px-2 flex items-center justify-center cursor-pointer ${currentPage <=1 ? 'hidden' : 'block'}`}>
                        <ChevronsLeft />    
                    </li>
                    <li 
                        onClick={() => {
                            if(currentPage <= 1) return
                            onPageChange(currentPage - 1)
                        }}
                        className={`sm:w-12 sm:h-10 w-8 h-10 px-2 flex items-center justify-center cursor-pointer ${currentPage <=1 ? 'hidden' : 'block'}`}>
                        <ChevronLeft />    
                    </li>
                        {
                            Array.from({length: visiblePages}).map((_, index) => {
                                const page = currentPage > totalPages - Math.floor(visiblePages / 2) ? totalPages - (visiblePages - 1) + index : currentPage <= Math.ceil(visiblePages / 2) ? index + 1 : currentPage - 2 + index
                                return (
                                    <li 
                                        key={`page-${page}`}
                                        onClick={() => onPageChange(page)} 
                                        className={`sm:w-12 sm:h-10 w-8 h-10 flex items-center justify-center cursor-pointer ${currentPage === page ? 'bg-cyan-600' : ''}`}>{page}</li>
                                )
                            })
                        }
                    <li 
                        onClick={() => {
                            if(currentPage >= 500) return
                            onPageChange(currentPage + 1)
                        }}
                        className={`sm:w-12 sm:h-10 w-8 h-10 px-2 flex items-center justify-center cursor-pointer ${currentPage < 500 ? 'block' : 'hidden'}`}>
                        <ChevronRight />    
                    </li>
                    <li 
                        onClick={() => {
                            if(currentPage === 500) return
                            onPageChange(500)
                        }}
                        className={`sm:w-12 sm:h-10 w-8 h-10 px-2 flex items-center justify-center cursor-pointer ${currentPage < 500 ? 'block' : 'hidden'}`}>
                        <ChevronsRight />    
                    </li>
            
                </ul>
    )
}