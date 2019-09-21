export const reqCityWeather = key =>{
    return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=xPIvA30rAbPrWjygBi0AosCCDbU2Wu9D&language=en&details=false `)
        .then(handleResponse)
};

export const findCity = name =>{
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=xPIvA30rAbPrWjygBi0AosCCDbU2Wu9D&q=${name}&language=en`)
        .then(handleResponse)
};

export const getDailyForcasts = key =>{
       return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=xPIvA30rAbPrWjygBi0AosCCDbU2Wu9D&language=en&details=true&metric=true`)
        .then(handleResponse)
};

export const  getWeatherByGeo = async (lat,lon) =>{
    const _lat = lat;
    const _lon = lon;
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=xPIvA30rAbPrWjygBi0AosCCDbU2Wu9D&q=${_lat}%2C${_lon}&language=en&details=true&toplevel=true`)
        .then(handleResponse)
}

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
