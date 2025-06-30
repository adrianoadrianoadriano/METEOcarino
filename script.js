function caricaMeteo() {
  const citta = document.getElementById('cittaInput').value;
  
  const language = "it";        
  const url = `http://localhost:3000/meteo?q=${encodeURIComponent(citta)}`;

  fetch(url)
    .then(response => {
      // Controlla se la risposta è ok
      if (!response.ok) {
        alert("Errore nella richiesta");
        throw new Error("Errore nella richiesta");
      }
      return response.json();
    })
    .then(data => {
      // Estrai i dati
      const { location, current, forecast } = data; // Destruttura i dati
      const { name, region, country } = location; 
      const { temp_c, condition } = current;
      const { text } = condition;
      const { forecastday } = forecast;
      const { day } = forecastday[0];
      const { maxtemp_c, mintemp_c } = day;
      
      // Aggiorna il DOM
      document.getElementById('luogo').innerText = `${name}, ${region}, ${country}`;
      document.getElementById('data').innerText = location.localtime.replace(' ', ' | ');
      document.getElementById('temp').innerText = `${temp_c}°C`;
      document.getElementById('condizione').innerText = text;
      document.getElementById('temp-max').innerText = `Max: ${maxtemp_c}°C`;
      document.getElementById('temp-min').innerText = `Min: ${mintemp_c}°C`;
    })
    .catch(error => {
      console.error("C'è un errore nella richiesta", error);
    });
}
