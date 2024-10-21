const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const currentTime = new Date().toISOString();
    res.send(`Dan Nguyen - WEB322 ${currentTime}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
