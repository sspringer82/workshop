# Datensätze löschen

1. Für jeden Eintrag in der Liste erzeugt ihr einen click-Handler
2. Der click-Handler führt einen fetch-Call zum Server aus
3. War die Löschoperation erfolgreich, müsst ihr die Daten aus dem lokalen State updaten

```
fetch('http://localhost:3001/recipe/' + id, {method: 'DELETE'}).then(response => {
// magic happens here
})
```
