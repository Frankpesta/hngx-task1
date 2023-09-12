const express = require('express');

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const current_day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const track = req.query.track;
    const github_repo_url = 'https://github.com/Frankpesta/hngx-task1';
    const github_file_url = 'https://github.com/Frankpesta/hngx-task1/blob/main/index.js';
  
    const Cutc_time = new Date().toISOString();
    const utc_time = Cutc_time.replace(/\.\d+Z$/, 'Z');
    console.log(utc_time)
  
    res.status(200).json({
      slack_name,
      current_day,
      utc_time,
      track,
      github_repo_url,
      github_file_url,
      status_code: 200,
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

  module.exports = app;