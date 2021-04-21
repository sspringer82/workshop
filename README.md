# React Workshop

## Unsere Erwartungen

- Einblick in React und wie geht's
- Wie macht man React vernünftig und nachhaltig
- Wann nutzt man welche Art von Komponenten & Konzepte
- Sauberer Aufbau einer Applikation
- Wie kann man bestehenden Code besser machen
- React in der Praxis und auch in größeren Projekten

## Erste Schritte

Bestehende Applikation weiterentwickeln:

- sourcecode holen
- ins Verzeichnis wechseln
- npm install
- npm start

Neue Applikation:

- npx create-react-app workshop --template typescript --use-npm
- cd workshop
- npm start

## Links

- https://docs.npmjs.com/cli/v7/using-npm/scripts
- https://github.com/browserslist/browserslist
- https://create-react-app.dev/docs/supported-browsers-features/
- https://kentcdodds.com/blog
- https://overreacted.io/
- https://github.com/brillout/awesome-react-components

## Backend

- npm install json-server
- data.json erzeugen (oder kopieren)
- package.json > scripts > backend script erzeugen
  `"backend": "json-server -w data.json -p 3001"`
- npm run backend (ACHTUNG: backend und start müssen parallel ausgeführt werden)

## Styling

- Inline Styling: <div style={{color: 'white'}}>
- Styling über Klassen + externes Stylesheet: <div className="foo">
  - import './List.css';
- SCSS: Support von https://sass-lang.com/
  - npm install node-sass
  - import './List.scss';
- CSS modules: auf die Komponente namespaced
  - Komponente: List.tsx
    import style from './List.module.css';
    <div className={style.foo}>
  - CSS Module: List.module.css
- Styled Components: https://styled-components.com/
  - Installation: npm i styled-components
- Tailwind https://tailwindcss.com/
  - Verwendung mit React: https://tailwindcss.com/docs/guides/create-react-app

## Immutability

- https://github.com/kolodny/immutability-helper
- https://github.com/immerjs/immer
- https://immutable-js.github.io/immutable-js/
