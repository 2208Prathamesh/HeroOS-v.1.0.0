const express = require('express');
const path = require('path');

const app = express();
// server port 
const port = 25412;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:page', (req, res, next) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, 'public', `${page}.html`);
    res.sendFile(filePath, (err) => {
        if (err) {
            next(); 
        }
    });
});

// Main stite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 errors page
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'error', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});