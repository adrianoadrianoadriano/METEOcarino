# App Meteo 🌤️

Un'applicazione web semplice per visualizzare le previsioni meteo utilizzando l'API di WeatherAPI.

## Caratteristiche
- 🌍 Ricerca meteo per qualsiasi città
- 📊 Visualizzazione temperatura attuale, massima e minima
- 🎨 Interfaccia con mascotte animata
- 🌐 Supporto multilingua (italiano)
[Guarda il video demo](lama3.mp4)
## Prerequisiti
- Node.js (versione 18 o superiore)
- Account gratuito su [WeatherAPI](https://www.weatherapi.com/)

## Installazione

1. **Clona il repository:**
   ```bash
   git clone https://github.com/tuo-username/meteo-app.git
   cd meteo-app
   ```

2. **Installa le dipendenze:**
   ```bash
   cd "meteo backend"
   npm install
   ```

3. **Configura l'API key:**
   - Copia il file `meteo.env.example` e rinominalo in `meteo.env`
   - Inserisci la tua chiave API di WeatherAPI:
   ```
   WEATHER_API_KEY=la_tua_chiave_api_qui
   ```

4. **Avvia il backend:**
   ```bash
   cd "meteo backend"
   node index.js
   ```

5. **Avvia il frontend:**
   - Apri `index.html` con un server locale (es. Live Server)
   - Oppure usa Python: `python -m http.server 5500`
   - Vai su `http://localhost:5500`

## Come ottenere l'API key

1. Vai su [WeatherAPI.com](https://www.weatherapi.com/)
2. Registrati gratuitamente
3. Vai nel dashboard e copia la tua API key
4. Incollala nel file `meteo.env`

## Struttura del progetto

```
meteo/
├── index.html              # Frontend
├── script.js              # Logica frontend
├── style.css              # Stili CSS
├── meteo.env.example      # Template configurazione
├── README.md              # Questo file
└── meteo backend/
    ├── index.js           # Server backend
    ├── package.json       # Dipendenze Node.js
    └── node_modules/      # Dipendenze installate
```

## Tecnologie utilizzate
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **API:** WeatherAPI.com

## Contribuire
1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha il branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## Licenza
Questo progetto è sotto licenza MIT.

## Autore
Il tuo nome - [@tuo-username](https://github.com/tuo-username)
