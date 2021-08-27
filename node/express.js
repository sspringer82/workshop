import express from 'express';

const app = express();

const users = [
  {
    id: 1,
    name: 'Hendrik',
  },
  {
    id: 2,
    name: 'Lotta',
  },
  {
    id: 3,
    name: 'Leslie',
  },
];

app.use(express.json());

app.get('/users', (request, response) => {
  response.json(users);
});

app.get('/users/:id', (request, response) => {
  const user = users.find(
    (user) => user.id === parseInt(request.params.id, 10),
  );
  if (!user) {
    response.status(404).send('Not found');
  }
  response.json(user);
});

app.post('/users', (request, response) => {
  users.push(request.body);
  response.send(request.body);
});

app.listen(8080, () =>
  console.log('Server hört auf Port http://localhost:8080'),
);
