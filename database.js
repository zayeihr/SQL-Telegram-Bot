const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

async function queryDatabase(query) {
  const sql = 'SELECT * FROM enlistment WHERE nric_last4 = $1';
  const values = [query];
  try {
    const res = await client.query(sql, values);
    return res;
  } catch (err) {
    console.error('Database query error:', err.stack);
    throw err;
  }
}

module.exports = {
  queryDatabase,
};
