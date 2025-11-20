
const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeather");
const weatherInfo = document.getElementById("weatherInfo");

// Map weather codes to descriptions
const weatherCodes = {
  0: "Clear sky ☀️",
  1: "Mainly clear 🌤️",
  2: "Partly cloudy ⛅",
  3: "Overcast ☁️",
  45: "Fog 🌫️",
  48: "Depositing rime fog 🌫️",
  51: "Light drizzle 🌦️",
  61: "Light rain 🌧️",
  63: "Moderate rain 🌧️",
  65: "Heavy rain 🌧️",
  71: "Light snow 🌨️",
  73: "Moderate snow 🌨️",
  75: "Heavy snow ❄️",
  95: "Thunderstorm ⛈️"
};

getWeatherBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  weatherInfo.innerHTML = "<p>Loading...</p>";

  try {
    // 1️⃣ Get city coordinates using Open-Meteo's Geocoding API
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      weatherInfo.innerHTML = "<p>City not found. Please try again.</p>";
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // 2️⃣ Fetch weather using coordinates
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
    const { temperature, weathercode, windspeed } = weatherData.current_weather;

    // 3️⃣ Show data
    weatherInfo.innerHTML = `
      <h2>${name}, ${country}</h2>
      <p class="icon">${weatherCodes[weathercode] || "Unknown weather 🌍"}</p>
      <p>🌡️ Temperature: ${temperature}°C</p>
      <p>💨 Wind Speed: ${windspeed} km/h</p>
    `;
  } catch (error) {
    weatherInfo.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    console.error(error);
  }
});
