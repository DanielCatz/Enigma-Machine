import express from 'express';
import db from '../sqlitedb';

const router = express.Router();

// If Dev, set up test, separate file
if (process.env.NODE_ENV !== 'production') {
  // empty db for possible testing
  router.delete('/delete', (req, res) => {
    db.run('DROP TABLE base', err => {
      if (err) {
        throw err;
      }
    });
  });

  router.get('/peek/:id', (req, res) => {
    db.get('SELECT * FROM base WHERE id = ?', [req.params.id], (err, row, fields) => {
      console.log(row);
      if (!err) return res.json({ success: true, row, fields });
      return res.json({ success: false, error: err });
    });
  });

  router.put('/create', (req, res) => {
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
  });
} // end test endpoints

export default router;
