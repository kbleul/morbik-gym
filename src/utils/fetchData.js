

export const exercise_options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6f086cff7fmshc85ad17d299aa15p12cc18jsn020d508320bc',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url , options) => {
    const response = await fetch(url, options);

    const data = response.json()

    return data
}