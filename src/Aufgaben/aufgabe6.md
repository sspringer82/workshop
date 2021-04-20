# Erstellen von neuen Rezepten

Erzeuge eine neue Form-Komponente zum erstellen von neuen Rezepten.

Ermögliche die Eingabe von Titel, Zutaten und Schritten

Gehe von genau 5 Zutaten aus.

Nachdem die Benutzer das Formular gefüllt haben, speichere die Daten auf dem Server und aktualisiere die Liste. (wo muss das Formular platziert werden?)

```
  fetch('http://localhost:3001/recipe', {
    method: 'POST',
    headers: {'Content-Type': 'Application/JSON'},
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => // hier haben wir die neue ID);
```

Bonus: Füge eine Validierung ein, die prüft, ob zumindest der Titel gesetzt ist

Bonus++: sieh eine dynamische anzahl von Zutaten vor.
