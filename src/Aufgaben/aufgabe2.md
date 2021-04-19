# Liste vom Server holen

1. Sorgt dafür dass eure Komponente einen eigenen State hat (useState)
2. Legt einen initialen State für die Komponente fest ([])
3. Holt die Daten innerhalb eines useEffects vom Server

```
fetch('http://localhost:3001/recipe').then(response => response.json).then(data => console.log(data));
```
