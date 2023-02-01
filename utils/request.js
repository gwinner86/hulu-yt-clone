const API_KEY = process.env.API_KEY;


export default  {
    fetchTrending : {
      title:'Trending',
      url : `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated : {
      title:'Top rated',
      url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovie : {
      title:'Action',
      url : `/discover/movie?api_key=${API_KEY}&width_genres=27`
    },
    fetchMysteryMovie : {
      title:'Mystery',
      url : `/discover/movie?api_key=${API_KEY}&width_genres=9648`
    },
    fetchTV : {
      title:'TV',
      url : `/discover/movie?api_key=${API_KEY}&width_genres=48`
    },
    fetchComedyMovie : {
      title:'Comedy',
      url : `/discover/movie?api_key=${API_KEY}&width_genres=45`
    },
    fetchHerrorMovie : {
      title:'Herror',
      url : `/discover/movie?api_key=${API_KEY}&width_genres=65`
    }
}