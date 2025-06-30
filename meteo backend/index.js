const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: "./meteo.env" });

const app = express();
const PORT = 3000;
const API_KEY = process.env.WEATHER_API_KEY;

// CORS aggiornato per accettare entrambi localhost e 127.0.0.1
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
}));

app.get('/meteo', async (req, res) => {
  const city = req.query.q;
  console.log('Richiesta ricevuta per città:', city);
  
  if (!city) {
    console.log('Parametro città mancante');
    return res.status(400).json({ error: "Parametro 'q' mancante" });
  }

  if (!API_KEY) {
    console.log('API_KEY mancante');
    return res.status(500).json({ error: "API_KEY non configurata" });
  }

  try {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(city)}&lang=it`;
    console.log('Chiamata API per città:', city);
    
    // Usa fetch nativa di Node.js (disponibile dalla v18+)
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (!response.ok) {
      console.log('Errore API:', data);
      return res.status(response.status).json(data);
    }
    
    console.log('Dati ricevuti con successo per:', city);
    res.json(data);
  } catch (error) {
    console.error("Errore dettagliato:", error);
    res.status(500).json({ error: "Errore del server", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
  console.log('API_KEY configurata:', !!API_KEY);
});