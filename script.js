
let request = new XMLHttpRequest();
request.open("GET","https://api.nasa.gov/planetary/apod?api_key=NSUxnU2Qg4VnRFx8gpkM1YyQvG95vUuHKzTueQEp");

request.onload = function(){
    const response = JSON.parse(request.response);
    document.querySelector("#title").textContent = response.title;
    document.querySelector("#date").textContent = response.date;
    document.querySelector("#pic").src = response.hdurl;
    document.querySelector("#explanation").textContent = response.explanation;
    document.querySelector("#copyright").textContent= response.copyright;
  };

request.send();
