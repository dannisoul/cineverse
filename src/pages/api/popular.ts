import type { APIContext } from "astro";

export async function GET(context: APIContext) {
    const mediaType = context.url.searchParams.get('mediaType')
    const page = context.url.searchParams.get('page') ?? 1
    const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${import.meta.env.API_KEY}&page=${page}`)
    if(!response.ok) return Response.json({status: response.status, statusText: response.statusText, error: true})
    const data = await response.json()
    console.log(data)
    return new Response(
        JSON.stringify(data),
        {
            headers: {
                "Cache-Control": "max-age=86400"
            }
        }
    )
}