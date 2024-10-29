/*       ___   ___   _______   _________   ________            ________   _________
 *      /  /  /  /  /  ____/  /  ___   /  /  __   /           /  __   /  /  ______/
 *     /  /__/  /  /  /___   /  /__/  /  /  / /  /  ______   /  / /  /  /  /_____
 *    /  ___   /  /  ____/  /     ___/  /  / /  /  /_____/  /  / /  /  /_____   /
 *   /  /  /  /  /  /___   /  /\  \    /  /_/  /           /  /_/  /  _____ /  /
 *  /__/  /__/  /______/  /__/  \__\  /_______/           /_______/  /________/
 *        
 *              
 *  HeroOS Operating System 1.0.1 (Beta)
 *  (c) 2024 Prathamesh Barbole, Heropixel Network and HeroOS Contributors,
 * 
*/

// server ip and port change here,(ip not mendatory)
const domain = "os.heropixel.fun";
const port = 3001;


const express = require('express');
const path = require('path');
const { config } = require('process');
const fs = require('fs');
fs.readFile('logo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

const app = express();

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

// HeroOS main files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// HeroOS error 404
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'error', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`HeroOS Operating System is running on ${domain}:${port}`);
});
