const path = require('path');
const express = require('express');

const publicDirectoryPath = (path.join(__dirname, '../public'));

const app = express();

app.use(express.static(publicDirectoryPath));

// app.com
// app.com/help
// app.com/about


app.get('', (req, res) => {
    res.send('<h1>Title</h1>');
})


app.get('/about', (req, res) => {
    res.send('This is our about page');
})

app.get('/weather', (req, res) => {
    res.send({
        Location: 'Lagos',
        weather: 'Cold'
    });
});





app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
