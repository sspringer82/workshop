# Hook API

Migriert die List-Komponente von einer Klassen- in eine Funktionskomponente mit Hooks.
Für den State der Komponente kommt der State Hook (useState) zum Einsatz. Für die componentDidMount-Lifecycle-Methode kommt der Effect-Hook (useEffect) zum Einsatz.

```
const [state, setState] = useState(initialState);
```

```
useEffect(() => {
  // lifecycle logic for mount and update
  return () => {
    // unmount
  }
}, [dependencies]);
```

Als Ersatz für componentDidMount:

```
useEffect(() => {
  // your logic goes here
}, []);
```
