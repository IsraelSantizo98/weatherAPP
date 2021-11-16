//API OPen weather map
//Capturar elementos de DOMos
let container = document.getElementById('container');
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
const displayBackgroundImage = () => {}
const displayData = () => {}
//Declaracion weatherData
const getWeatherData = (city) => {
    //Hacer un request a la API y obtener un objeto que tenga los datos solicitados de la cuidad
    //Cambiar la imagen del fondo de pantalla dependiendo el clima
    //Mostrar datos en la pantalla al cargar la pagina con las variables de DOM
    displayBackgroundImage(data);
    displayData(data);
}
//El ingresar a la pagina aparece un pais enconcreto
windows.onload = () => {
    getWeatherData("Guatemala");
}