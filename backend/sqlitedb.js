import sqlite from 'sqlite3';
import 'dotenv';

let dbHost = './db/test.db';

const db = new sqlite.Database(dbHost, err => {
  if (err) console.log('db failed', err);
  else console.log('Connected to DB ', dbHost);
});

if (process.env.NODE_ENV === 'production') {
  // Use ENV
  dbHost = './db/production.db';
}

db.run(
  'CREATE TABLE IF NOT EXISTS base(' +
    'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
    'origurl TEXT,' +
    'shorturl TEXT' +
    ')',
  err => {
    if (err) throw err;
  }
);

export default db;
