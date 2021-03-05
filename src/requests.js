const API_KEY = "07099fe156bb43be100f10c529ab5421";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}`,
    fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: ``,
    fetchComedyMovies: ``,
    fetchRomanceMovies: ``,
    fetchDocumentaries: ``,

}

export default requests;