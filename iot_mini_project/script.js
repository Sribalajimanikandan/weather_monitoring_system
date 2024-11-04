document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '9116b1d81c3bbe27d558ed84602d72f4'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const main = data.main;
            const wind = data.wind;
            const weather = data.weather[0];

            const result = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${main.temp}°C</p>
                <p>Humidity: ${main.humidity}%</p>
                <p>Pressure: ${main.pressure} hPa</p>
                <p>Wind Speed: ${wind.speed} m/s</p>
                <p>Description: ${weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}</p>
            `;

            document.getElementById('weatherResult').innerHTML = result;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
});