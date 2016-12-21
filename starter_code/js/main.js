// console.log("page ready");
$("form").submit(function(event){
  // console.log("submit function");
  var cityName =$("#city-type").val ();
    // console.log(cityName);
  if (cityName === "NYC" || cityName ==="New York" || cityName ==="New York City"){
    $("body").removeClass().addClass("nyc");
  } else if (cityName === "San Francisco" || cityName ==="SF" || cityName ==="Bay Area"){
    $("body").removeClass().addClass("sf");
  } else if (cityName === "Los Angeles" || cityName ==="LA" || cityName === "LAX"){
    $("body").removeClass().addClass("la");
  } else if (cityName === "Austin" || cityName ==="AU" || cityName ==="ATX"){
    $("body").removeClass().addClass("austin");
  } else if (cityName === "Sydney" || cityName ==="SYD"){
    $("body").removeClass().addClass("sydney");
  }
  event.preventDefault();
});
