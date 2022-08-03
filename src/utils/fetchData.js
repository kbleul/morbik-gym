

export const exercise_options =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "9573eb3fe0mshfc621f1e1bbbab1p18b132jsne7a91839acac",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtube_options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9573eb3fe0mshfc621f1e1bbbab1p18b132jsne7a91839acac',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }

}



export const fetchData = async (url , options) => {
    const response = await fetch(url, options);

    const data = response.json()
    return data
}



//api kbleulseged
  //6f086cff7fmshc85ad17d299aa15p12cc18jsn020d508320bc

//api kbleulseged22
  //9573eb3fe0mshfc621f1e1bbbab1p18b132jsne7a91839acac