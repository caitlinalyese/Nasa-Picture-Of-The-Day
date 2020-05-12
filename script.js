
fetch(
  "https://api.nasa.gov/planetary/apod?api_key=NSUxnU2Qg4VnRFx8gpkM1YyQvG95vUuHKzTueQEp"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })

    .then (data => {
    document.querySelector("#title").textContent = data.title;
    document.querySelector("#date").textContent = data.date;
    document.querySelector("#pic").src = data.hdurl;
    document.querySelector("#explanation").textContent = data.explanation;
    document.querySelector("#copyright").textContent= data.copyright
    });
  
    
