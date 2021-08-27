import { readFile } from 'fs/promises';

try {
  const data = await readFile('input.json', 'utf-8');
  const jsonData = JSON.parse(data);
  for (let i = 0; i < jsonData.users.length; i++) {
    console.log('Hallo ', jsonData.users[i].name);
  }
} catch (e) {
  console.error('WHOOPS', e);
}
