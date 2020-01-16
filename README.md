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
