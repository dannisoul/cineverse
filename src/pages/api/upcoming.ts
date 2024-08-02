import type { APIContext } from "astro";

export async function GET(context: APIContext) {

    const mediaType = context.url.searchParams.get('mediaType')
    const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/upcoming?api_key=${import.meta.env.API_KEY}`)
    if(!response.ok) return Response.json({status: response.status, statusText: response.statusText, error: true})
    const data = await response.json()
    return new Response(
        JSON.stringify(data), {
            headers: {
                "Cache-Control": "max-age=86400"
            }
        }
    )
}