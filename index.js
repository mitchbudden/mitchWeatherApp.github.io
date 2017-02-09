//new api key 814aadada34bada5
$(document).ready(function(){


var weatherApi = "653cb4e97f51e6b4380232a20fea3787";
var theWeather = 0;
var convertC = 0;

  
 var lat = "";
 var lon = "";
 
 //get Coords using http://ip-api.com/json
  
$.getJSON("http://ip-api.com/json", function(data) {
  var lat = data.lat;
  var lon = data.lon;
  var city = data.city;
  var country = data.country;
  $("#location").html("<b>" + city + ", " + country + "</b>");
  
  //ajax request using lat, lon, api key to input temperature
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +       "&APPID=653cb4e97f51e6b4380232a20fea3787",
    type: "GET",
    dataType: "json",
    success: function(data) {
      theWeather = data.main.temp;
      var convertC = (Math.round(theWeather - 273.15));
       document.getElementById('temperature').innerHTML = convertC + "°C";
      
      //icon info
      var icon = data.weather[0].icon;
      console.log(icon);
      
       if (icon == '01d') {
        $('#iconDisplay').addClass('wi wi-day-sunny');
      } else if (icon == '02d') {
        $('#iconDisplay').addClass(' wi wi-day-cloudy');
      } else if (icon == '03d') {
        $('#iconDisplay').addClass('wi wi-cloud');
      } else if (icon == '04d') {
        $('#iconDisplay').addClass('wi wi-cloudy');
      } else if (icon == '09d') {
        $('#iconDisplay').addClass('wi wi-cloudy');
      } else if (icon == '10d') {
        $('#iconDisplay').addClass('wi wi-day-rain');
      } else if (icon == '11d') {
        $('#iconDisplay').addClass('wi wi-day-thunderstorm');   
      } else if (icon == '13d') {
        $('#iconDisplay').addClass('wi wi-day-snow-wind');
      } else if (icon == '50d') {
        $('#iconDisplay').addClass('wi wi-fog');
      } else if (icon == '01n') {
        $('#iconDisplay').addClass('wi wi-night-clear');
      } else if (icon == '02n') {
        $('#iconDisplay').addClass('wi wi-night-alt-cloudy');
      } else if (icon == '03n') {
        $('#iconDisplay').addClass('wi wi-cloud');
      } else if (icon == '04n') {
        $('#iconDisplay').addClass('wi wi-night-cloudy-gusts');
      } else if (icon == '09n') {
        $('#iconDisplay').addClass('wi wi-night-rain');
      } else if (icon == '10n') {
        $('#iconDisplay').addClass('wi wi-night-alt-rain');
      } else if (icon == '11n') {
        $('#iconDisplay').addClass('wi wi-night-alt-thunderstorm');
      } else if (icon == '13n') {
        $('#iconDisplay').addClass('wi wi-night-snow-wind');
      } else if (icon == '50n') {
        $('#iconDisplay').addClass('wi wi-fog');
      } 
      
    },
    //error function
    error: function(err) {
      $("#temperature").text("error")
    }
})
})  

 
  //buttons to toggle b/t C & F
  $("#changeF").on("click", function() {
  
  var tempF = Math.round((theWeather - 273.15) * (9/5) + 32);  
    document.getElementById('temperature').innerHTML = tempF + "°F"
    
  })
  
  $("#changeC").on("click", function() {
    document.getElementById('temperature').innerHTML = Math.round(theWeather - 273.15) + "°C";
    
  })
});