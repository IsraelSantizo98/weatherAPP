//API OPen weather map
//Capturar elementos de DOMos
let body = document.getElementById('body');
let searchForm = document.getElementById('search__submit');
let searchInput = document.getElementById('search__input');
let temperatureDegrees = document.getElementById('degreeNumber');
let weatherIcon = document.getElementById('weatherIcon');
let temperatureDescription = document.getElementById('description');
let timeZone = document.getElementById('timezone');
let date = document.getElementById('date');
let min = document.getElementById('min');
let max = document.getElementById('max');
//Declara funciones secundarias
const displayBackgroundImage = (obj) => {
    //Extraer la hora del objeto que contiene los datos del tiempo
    //console.log(obj.list[4].dt);
    //Extrae la fecha maquina a milisegundos para convertirla en lenguaje humano
    let dateSpanish = new Date(obj.list[4].dt*1000).toLocaleString("es-GT", {
        timeStyle: "short",
        dateStyle: "long"
    });
    console.log(dateSpanish);
    //Manipualar DOM en la hora del objeto que contiene los datos del tiempo
    //extraer la hora
    date.textContent = `${dateSpanish}`;
    const dayHours = new Date(obj.list[4].dt*1000).getHours();
    console.log(dayHours);
    if(dayHours > 6 && dayHours < 18){
        body.classList.remove("night");
        body.classList.add("day");
    }else {
        body.classList.add("night");
        body.classList.remove("day");
    }
}
const displayData = (obj) => {
    temperatureDegrees.textContent = Math.floor(obj.list[0].main.temp);
    timeZone.textContent = obj.list[0].name;
    const icon = obj.list[0].weather[0].icon;
    weatherIcon.innerHTML = `<img src='img/${icon}.png'></img>`;
    min.textContent = Math.floor(obj.list[0].main.temp_min);
    max.textContent = Math.floor(obj.list[0].main.temp_max);
    temperatureDescription.textContent = obj.list[0].weather[0].description.charAt(0).toUpperCase()+obj.list[0].weather[0].description.slice(1);
}
//Declaracion weatherData
const getWeatherData = async(city) => {
    //Hacer un request a la API y obtener un objeto que tenga los datos solicitados de la cuidad
    const res = await fetch (`https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric&lang=sp`, {
        "headers": {
            "x-rapidapi-key": "a186434c9amsh90661c736a88ed4p11b4bdjsn41afb6f43e65",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    });
    //Pasar de fetch a jason
    const data = await res.json();
    console.log(data);
    //Cambiar la imagen del fondo de pantalla dependiendo el clima
    //Mostrar datos en la pantalla al cargar la pagina con las variables de DOM
    displayBackgroundImage(data);
    displayData(data);
}
searchForm.addEventListener("submit", e => {
    e.preventDefault();
    //Variable del input
    getWeatherData(searchInput.value);
    console.log(searchInput.value);
})
//El ingresar a la pagina aparece un pais enconcreto
window.onload = () => {
    getWeatherData("Barcelona");
}
//Se modifica url

//https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric&lang=sp
//https://community-open-weather-map.p.rapidapi.com/weather?q={city}%2Cuk&units=imperial