const btn = document.querySelector(".btn");

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

async function openWeather() {
    let city = prompt(`What city do you want to choose?`, `Odesa`);
    if (!city) return;
    try {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d323085f7c89aa81472d0601634ca9bc`);
        const data = await weather.json();
        const dateInfo = formatDate();
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        if (!data) return;
        const weatherDetails = {
            temp: Math.floor(data.main.temp - 273),
            tempFeelLike: Math.floor(data.main.feels_like - 273),
            humidity: data.main.humidity,
            wind: data.wind.speed,
            pressure: data.main.pressure,
            clouds: data.clouds.all,
            weather: data.weather[0].description,
            cityName: data.name,
        };
        renderWeatherData(weatherDetails, iconUrl, dateInfo);
    } catch (error) {
        console.log(`Error with weather api, pls try later`, error);
    }
}

    function formatDate(){
        const date = new Date();
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const pmOram = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return { monthName, day, hours, minutes, pmOram };
}

    function renderWeatherData(details,  iconUrl, dateInfo) {
        const {cityName, temp, tempFeelLike, humidity, wind, pressure, clouds} = details;
        const { monthName, day, hours, minutes, pmOram } = dateInfo;
        document.querySelector(".city-name").textContent = cityName;
        document.querySelector(".current-temp").textContent = `${temp}°C`;
        document.querySelector(".feel-like-temp").textContent = `Feels like ${tempFeelLike}°C`;
        document.querySelector(".humidity").textContent = `Humidity: ${humidity}%`;
        document.querySelector(".wind").textContent = `Wind Speed: ${wind} km/h`;
        document.querySelector(".pressure").textContent = `Pressure: ${pressure} hPa`;
        document.querySelector(".clouds").textContent = `Cloudiness: ${clouds}%`;
        document.querySelector(".datetime").textContent = `${monthName} ${day}`;
        document.querySelector(".weather-icon").src = iconUrl;
        document.querySelector(".datetimeminutes").textContent = `Time:${hours}:${minutes} ${pmOram}`;
    }
openWeather();

btn.addEventListener(`click`, openWeather);





// async function fetchFilms() {
//   let films;
//
//   const res = await fetch("https://swapi.dev/api/films");
//   const data = await res.json();
//
//   films = data || [];
//
//   console.log(films);
// }
//
// fetchFilms();