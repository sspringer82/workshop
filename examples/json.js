// die daten kommen irgendwo her z.B. aus dem Backend
const json =
  '[{"id":1,"title":"Get up","done":true},{"id":2,"title":"Eat","done":true},{"id":3,"title":"Sleep","done":false}]';

// daten in Objektstruktur umwandeln
const data = JSON.parse(json);

for (let i = 0; i < data.length; i++) {
  // HTML Knoten erzeugen
  const node = document.createElement('div');
  // Text in Knoten schreiben
  node.innerText = data[i].title;
  // Knoten in die Seite einbinden
  document.body.appendChild(node);
}
