# Context

Implementiere einen "DarkMode".

Erzeuge hierfür einen Kontext mit createContext

```
const DarkMode = React.createContext(false);
```

Stelle in der App-Komponente den Wert über den Provider des contexts zur Verfügung

```
  <DarkMode.Provider value={darkMode}></DarkMode.Provider>
```

Der Wert des Providers soll an einen lokalen State der App-Komponente gebunden sein

Implementiere einen Button, mit dessen Hilfe der DarkMode gesetzt werden kann.

Style die Todos entsprechend des Kontext-Wertes

```
  const darkMode = useContext(DarkMode);
```
