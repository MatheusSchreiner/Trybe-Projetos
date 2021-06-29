const starwarsAPI = async () => {
  try {
    const resultFetch = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const resultJson = await resultFetch.json();
    return resultJson;
  } catch (err) {
    console.log(err);
  }
};

export default starwarsAPI;
