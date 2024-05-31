require('dotenv').config();
const { Telegraf } = require('telegraf');
const { Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
const app = express();
app.use(bodyParser.json());

bot.start((ctx) => ctx.reply('Welcome! Please enter your query.'));
bot.on('text', async (ctx) => {
  const query = ctx.message.text;
  try {
    const result = await db.queryDatabase(query);
    ctx.reply(formatResult(result));
  } catch (error) {
    ctx.reply('Error: ' + error.message);
  }
});

app.post('/webhook', (req, res) => {
  bot.handleUpdate(req.body, res);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

bot.telegram.setWebhook(`${process.env.WEBHOOK_URL}/webhook`);

function formatResult(result) {
  if (result.rows.length === 0) {
    return 'No results found.';
  }
  let response = 'Query Results:\n\n';
  result.rows.forEach(row => {
    response += `Company: ${row.company}\n4D: ${row.i4d}\nPES: ${row.pes}\n\n`;
  });
  return response;
}
