export const reqCityWeather = key =>{

    //return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=xPIvA30rAbPrWjygBi0AosCCDbU2Wu9D&language=en&details=false `)
    return fetch('http://localhost:3004/posts')

        .then(handleResponse)

};

export const findCity = name =>{
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=xPIvA30rAbPrWjygBi0AosCCDbU2Wu9D&q=${name}&language=en`)
        .then(handleResponse)
};

export const getDailyForcasts = key =>{
      //  return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=xPIvA30rAbPrWjygBi0AosCCDbU2Wu9D&language=en&details=true&metric=true`)
    return fetch('http://localhost:3000/DailyForecasts')
        .then(handleResponse)
};;

const handleResponse = response =>{
    return response.json().then(text => {
        const data = text;
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
};
