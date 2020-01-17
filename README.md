# React Workshop

## Repo

https://github.com/sspringer82/workshop

https://reactjs.org/

https://create-react-app.dev/

https://overreacted.io/

https://reactjs.org/docs/thinking-in-react.html

https://www.youtube.com/watch?v=ZCuYPiUIONs

https://pbs.twimg.com/media/Dc2YU2aWsAAVbmk?format=jpg&name=large

https://github.com/JedWatson/classnames

https://material.io/design/

https://react-bootstrap.github.io/

https://github.com/jaredpalmer/formik

https://github.com/jquense/yup

https://reacttraining.com/react-router/web

https://reactjs.org/blog/2017/09/26/react-v16.0.html

## CRA (Create React App)

React Apps bootstrappen

- npm install -g create-react-app => nicht gut wegen global
- create-react-app todo --typescript
- npx create-react-app todo --typescript
- npm create react-app todo --typescript
- yarn create react-app todo --typescript

## Styles

- https://github.com/airbnb/javascript
- https://google.github.io/styleguide/jsguide.html
- https://standardjs.com/

## immutability

- https://github.com/kolodny/immutability-helper
- https://github.com/immerjs/immer
- https://immutable-js.github.io/immutable-js/docs/#/

## Styling

### Inline Styling

Verwendung des Style-Attributs in Verbindung mit einem JavaScript-Objekt. Die CSS-Eigenschaften werden in diesem Fall in CamelCase geschrieben:

`margin-left => marginLeft`

### CSS Import

Reguläre CSS-Dateien können über JavaScript/TypesScript importe importiert werden. Nachteil: CSS ist global gültig.

Anwendung der Regel normalerweise über Klassen. ACHTUNG className statt class hier als Attribut

```
import './index.css';

<div className="myClass">text</div>
```

Die Verwendung der classnames Bibliothek vereinfacht die Benutzung:
https://www.npmjs.com/package/classnames

### SCSS

SCSS als Syntaxerweiterung für CSS durch einen Präprozessor.
Voraussetzung: node-sass muss installiert sein (npm install node-sass).

Dann kann eine scss-Datei wie ein css-Datei importiert werden.

```
import './index.scss';

<div className="myClass">text</div>
```

### Styled Components

Die Bibliothek Styled-Components bietet noch mehr Flexibilität, da auf Props etc. reagiert werden kann.

Styled Components basiert auf JavaScript Template Strings und implementiert verschiedene Tagging Functions, die Komponenten zurückgeben.

https://styled-components.com/

## Formulare

Controlled Components: Formularelemente, bei denen React die Kontrolle übernimmt. Der value ist mit dem State verknüpft, dieser wird mittels setState verändert.

Validierung: entweder manuell oder über externe Bibliotheken wie Formik (und Yup).

## Redux

### Installation

npm install redux react-redux
npm install -D @types/react-redux

npm install redux-devtools-extension
Redux Devtools: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=de

1. In der App.tsx den Redux Provider einbinden
2. Store erzeugen und an den Provider übergeben
3. RootReducer erzeugen, der über combineReducers alle Reducer der Applikation zusammenfasst
4. TodoReducer erzeugen (switch/case), der einen initalen State definiert
5. in der List-Komponente: useSelector lesend auf den Store zugreifen und Information an die Komponente übergeben

Saga:

1. Installation: npm install redux-saga
2. In der configureStore die sagaMiddleware erzeugen
3. Über applyMiddleware die sagaMiddleware in den Store einbinden
4. SagaMiddleware mit der rootSaga ausführen
5. RootSaga implementieren und die einzelnen Modul-Sagas (z.B. todo) einbinden
6. Modul-Saga implementieren (z.B. Todo)

Actions

1. npm install typesafe-actions
2. todo.actions.ts-Datei erzeugen
3. LOAD_TODOS und LOAD_TODOS_SUCCESS konstanten

Action dispatchen

1. in der List-Komponente useDispatch aufrufen
2. mit dem Rückgabewert die Action dispatchen (dispatch(loadTodosAction()))

Saga implementieren

1. Generator Funktion (loadTodos) schreiben und in die Saga-Funktion (todoSaga) einbinden mit takeLatest an die Action binden

Reducer implementieren

1. Switch/Case erweitern und auf die LOAD_TODOS_SUCCESS Action reagieren - neuen State erzeugen in dem die Daten vom Server enthalten sind

## Testing

Ausführung der Tests: `npm test`
Es müssen keine zusätzlichen Pakete installiert werden.

- Jest: https://jestjs.io/
- Matcher: https://jestjs.io/docs/en/expect
- Saga Testing: https://redux-saga.js.org/docs/advanced/Testing.html
- Axios Mock Adapter: https://github.com/ctimmerm/axios-mock-adapter
- Faker: https://github.com/marak/Faker.js/

- https://reactjs.org/docs/testing-recipes.html#rendering
- enzyme: https://airbnb.io/enzyme/
- https://testing-library.com/docs/react-testing-library/intro

Installation:
npm install -D @testing-library/react

coverage: npm test -- --collect-coverage
