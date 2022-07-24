var userInputEl = $("#user-input");
var citySelectEl = $("#cityselect");
var currentCityEl = $("#currentcity");
var forecastEl = $("#forecast-container");
var cityInfo = $('#cityInfo');
var currTemp = $('#Temp');
var windSpeed = $('#Wind');
var humidityEl = $('#Humidity');
var uvIndex = $('#Uv-Index');
var APIKey = "a502dd0fd8481b56b0f891a584ddb27e";
var data;

$("form").on("submit", function (event) {
  event.preventDefault();
  search(citySelectEl.val());
});

function search(citySelectEl) {
  // data = json
 
  
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +citySelectEl + "&units=imperial&appid=" + APIKey; 
    // lat = document.location.search(data.coord.lat);
    // "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
    var today = moment().format('MMM Do YY')
  fetch(url)
  
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        console.log(data)
        cityInfo.text(data.name + ":" + "  " + "(" + today + ")" + (data.weather.icon) );
        currTemp.text(data.main.temp + "\xB0" + "F");
        windSpeed.text(data.wind.speed + " " + "MPH");
        humidityEl.text(data.main.humidity + " " + "%") ;
        // uvIndex.text(data.)
    });
    var forecast = function(weather, citySelectEl) {
      for (var i = 0; i < weather.length; i++)
    };
};
// function search(citySelectEl) {
  
  
//     var url =
//       "https://api.openweathermap.org/data/2.5/weather?q=" +citySelectEl + "&units=imperial&appid=" + APIKey;
//       // "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
//       var today = moment().format('MMM Do YY')
//     fetch(url)
