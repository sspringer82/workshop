# Serverkommunikation

## Server

Öffnet eine neue Shell
wechselt in das backend Verzeichnis
`npm install` ...kurz warten
`npm start`... kurz warten

in den Browser wechseln: http://localhost:3001/todo

## Aufgabe

Ladet die Todo-Daten vom Server (http://localhost:3001/todo).

Nutzt dafür die Bibliothek axios (https://github.com/axios/axios).

```
import axios from 'axios';
```

Bei CORS Problemen: in der package.json-Datei:

```
"proxy": "http://localhost:3001",
```

Dann den Request auf "/todo" nicht auf "http://localhost:3001/todo"

Die Serverkommunikation findet NACH dem mounten der Komponente statt und ist asynchron!.
