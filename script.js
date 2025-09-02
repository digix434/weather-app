// script.js

const searchBtn = document.getElementById('searchBtn');
const weatherDiv = document.getElementById('weather');

searchBtn.addEventListener('click', fetchWeather);

async function fetchWeather() {
  const city = document.getElementById('city').value;
  if (!city) return;

  const API_KEY = 'a5d25a2551a4cdcb95a0bbb3ac1679ef'; // 🔑 Replace with your OpenWeather API key

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await res.json();

    if (data.main) {
      weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p class="temp">${Math.round(data.main.temp)}°C</p>
        <p>${data.weather[0].description}</p>
      `;
      weatherDiv.classList.add('show');
    } else {
      weatherDiv.innerHTML = '<p>City not found</p>';
      weatherDiv.classList.remove('show');
    }
  } catch (error) {
    weatherDiv.innerHTML = '<p>Error fetching data</p>';
    weatherDiv.classList.remove('show');
    console.error(error);
  }
}
