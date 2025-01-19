const btn = document.querySelector(".btn");
let city = prompt(`What city do you want to choose?`);

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


async function openWeather(){
    try {

        let result;
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d323085f7c89aa81472d0601634ca9bc`);
        const data = await weather.json();

        if (!data) return;
        result = data || [];
        console.log(result);
        let date = new Date();
        const monthName = months[date.getMonth()];
        let day = date.getDate();
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const weatherDetails = {
            temp: Math.floor(data.main.temp - 273),
            tempFeelLike: Math.floor(data.main.feels_like - 273),
            humidity: data.main.humidity,
            wind: data.wind.speed,
            pressure: data.main.pressure,
            clouds: data.clouds.all,
            weather: data.weather[0].description,
            cityName: data.name
        };
        let pmOram;
        if (hours > 12) {
            hours -= 12;
            pmOram = `PM`
        }
        else{
            if (hours === 0) {
                hours = 12;
            }
            pmOram = `AM`;
        }
        renderWeatherData(weatherDetails, monthName, day, iconUrl,hours, minutes, pmOram);
    }
    catch (error) {
        console.log(`Error with weather api, pls try later`,error);
    }


    function renderWeatherData(details, monthName, day, iconUrl, hours, minutes, pmOram) {
        document.querySelector(".city-name").textContent = details.cityName;
        document.querySelector(".current-temp").textContent = `${details.temp}°C`;
        document.querySelector(".feel-like-temp").textContent = `Feels like ${details.tempFeelLike}°C`;
        document.querySelector(".humidity").textContent = `Humidity: ${details.humidity}%`;
        document.querySelector(".wind").textContent = `Wind Speed: ${details.wind} km/h`;
        document.querySelector(".pressure").textContent = `Pressure: ${details.pressure} hPa`;
        document.querySelector(".clouds").textContent = `Cloudiness: ${details.clouds}%`;
        document.querySelector(".datetime").textContent = `${monthName} ${day}`;
        document.querySelector(".weather-icon").src = iconUrl;
        document.querySelector(".datetimeminutes").textContent = `Time:${hours}:${minutes} ${pmOram}`;
    }
}
openWeather();

btn.addEventListener(`click`, () => {
    openWeather();
});





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