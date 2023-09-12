const express = require('express');

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const track = req.query.track;
    const githubFileURL = 'https://github.com/Frankpesta/hngx-task1';
    const githubSourceURL = 'https://github.com/Frankpesta/hngx-task1/blob/main/index.js';
  
    const utcTime = new Date().toUTCString();
    const currentUtcTime = new Date(utcTime).toISOString();
  
    res.status(200).json({
      slack_name,
      currentDay,
      currentUtcTime,
      track,
      githubFileURL,
      githubSourceURL,
      statusCode: 200,
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });