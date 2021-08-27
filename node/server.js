import { createServer } from 'http';
import { readFile } from 'fs/promises';

createServer((request, response) => {
  readFile('input.json', 'utf-8').then((data) => {
    // const jsonData = JSON.parse(data);
    response.setHeader('content-type', 'application/json');
    response.end(data);
  });
}).listen(8080, () => {
  console.log('Server hört auf Port http://localhost:8080');
});
