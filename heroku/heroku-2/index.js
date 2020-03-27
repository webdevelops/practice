const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.end(`
    <div>
      <ul>
        <li>
          <a href="/">Home page</a>
        </li>
        <li>
          <a href="/about">About page</a>
        </li>
      </ul>
      <h1>Home page!</h1>
    </div>
  `);
});

app.get('/about', (req, res) => {
  res.end(`
    <div>
      <ul>
        <li>
          <a href="/">Home page</a>
        </li>
        <li>
          <a href="/about">About page</a>
        </li>
      </ul>
      <h1>About page</h1>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log('Server has been started...');
});