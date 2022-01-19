document.addEventListener("DOMContentLoaded", () => {
  var weather = document.querySelector(".weather");
  var dataIcon = document.querySelector("#data-icon");
  var tempC =0;
  var tempCFeel =0;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=nafpaktos&appid=f6069445d08b42a805da97be1d0d42d6')
    .then(response => response.json())
    .then(data => {
        tempC = (data.main.temp-273.15);
        tempCFeel = (data.main.feels_like-273.15);
        $("#data-cityName").text(data.name);
        $("#data-country").text(data.sys.country);
        $("#data-current").text(data.weather[0].description);
        var iconurl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        var image = new Image();
        image.src = iconurl;
        $('#data-icon').append(image);
        $("#data-feel_temp").text(tempCFeel.toFixed(1));
        $("#data-temp").text(tempC.toFixed(1));
        $("#data-humidity").text(data.main.humidity);
        $("#data-wind").text(data.wind.speed);
    })
    .catch(err => alert("City Weather didn't load!"))



});
