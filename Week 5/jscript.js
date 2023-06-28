function setCity(id) {
  var navObj, item, navImg;

  for (let x = 1; x <= 5; x++) {
    let navObj = document.getElementById(`city${x}`);
    navObj.style.display = "none";
  }

  switch (id) {
    case 1:
      city = "sedona";
      document.getElementById("city1").style.display = "inline";
      break;
    case 2:
      city = "denver";
      document.getElementById("city2").style.display = "inline";

      break;
    case 3:
      city = "seattle";
      document.getElementById("city3").style.display = "inline";

      break;
    case 4:
      city = "honolulu";
      document.getElementById("city4").style.display = "inline";

      break;
    case 5:
      city = "portland";
      document.getElementById("city5").style.display = "inline";

      break;
  }

  document.getElementById("cityName").innerText = city;
  getWeather();
}
