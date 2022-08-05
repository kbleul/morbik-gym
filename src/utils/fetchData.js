

export const exercise_options =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "ab7c8db0c6msh3e107aad8665aa9p1c914djsnc3511c425564",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtube_options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ab7c8db0c6msh3e107aad8665aa9p1c914djsnc3511c425564',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }

}



export const fetchData = async (url , options) => {
    const response = await fetch(url, options);
      const data = response.json()

          return data
}

