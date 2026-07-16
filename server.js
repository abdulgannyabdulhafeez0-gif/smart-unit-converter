const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve public static files if needed
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Converter server running on port ${port}`);
});
