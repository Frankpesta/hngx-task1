const express = require('express');

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = new Date().toISOString();
    const track = req.query.track;
    const githubFileURL = 'https://github.com/your-username/your-repo/blob/main/your-file.js';
    const githubSourceURL = 'https://github.com/your-username/your-repo';
  
    // Validate UTC time within +/-2 hours
    const utcTime = new Date().toUTCString();
    const currentUtcTime = new Date(utcTime).toISOString();
  
    // Status Code of Success
    res.status(200).json({
      slack_name,
      currentDay,
      currentUtcTime,
      track,
      githubFileURL,
      githubSourceURL,
      statusCode: 'Success',
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });