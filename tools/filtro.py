import json
import requests

# URL del JSON
url = "https://www.weatherapi.com/docs/conditions.json"

# Richiesta HTTP e decoding con utf-8-sig per gestire il BOM
try:
    response = requests.get(url)
    response.raise_for_status()  # Raise an error for HTTP issues
    text = response.content.decode("utf-8-sig")
    data = json.loads(text)
except requests.exceptions.RequestException as e:
    print(f"❌ Errore nella richiesta HTTP: {e}")
    data = []  # Set data to an empty list to avoid further errors
except json.JSONDecodeError as e:
    print(f"❌ Errore nel parsing del JSON: {e}")
    data = []  # Set data to an empty list to avoid further errors

# Filtra solo le traduzioni italiane
traduzioni_italiane = []

for condizione in data:
    for lingua in condizione.get("languages", []):
        if lingua.get("lang_name") == "Italian":
            traduzioni_italiane.append({
                "code": condizione["code"],
                "icon": condizione["icon"],
                "day": condizione["day"],
                "night": condizione["night"],
                "lang_name": lingua["lang_name"],
                "lang_iso": lingua["lang_iso"],
                "day_text": lingua["day_text"],
                "night_text": lingua["night_text"]
            })

# Salva su file
with open("traduzioni_italiane.json", "w", encoding="utf-8") as f:
    json.dump(traduzioni_italiane, f, ensure_ascii=False, indent=2)

print("✅ File 'traduzioni_italiane.json' creato con successo!")
