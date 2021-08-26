CREATE TABLE user (
  id INTEGER  PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  firstname TEXT,
  lastname TEXT,
  password TEXT
)

INSERT INTO user (username, password) VALUES ('test', 'test');

CREATE TABLE todo (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  done INTEGER
);

INSERT INTO todo (title, done) VALUES ('Get up', 1), ('Eat', 1), ('Sleep', 0);