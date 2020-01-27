const path = require('path');
const express = require('express');
const app = express();
const hbs = require("hbs")
const geocode = require ('./utils/geocode')
const forecast = require('./utils/forecast')

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/view')
const partialsPath = path.join(__dirname, '../template/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        name: 'Olaide Emmanuel',
        stack: 'React, Vue, NodeJS, Python, Golang, C##',
        profession: 'Software Developer',
        futureAspiration: 'IoT, ML'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        stack: 'React, Vue, NodeJS, Python, Golang, C##',
        profession: 'Software Developer',
        futureAspiration: 'IoT, ML',
        name: 'Olaide Emmanuel'
    });
});
// app.com
// app.com/help
// app.com/about


app.get('', (req, res) => {
    res.send('<h1>Title</h1>');
})

app.get('/products', (req, res) => {
    // console.log(req.query.search);
    if (req.query.search) {
       return  res.send({
            error: 'You must provide a product term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        stack: 'React and NodeJS',
        message: "God help me",
        new: ' Help',
        name: 'Olaide Emmanuel'
    });
});

app.get('/weather', (req, res) => {
        if(!req.query.address) {
            return res.send({
                error: "You must provide an address"
            })
        }

        geocode (req.query.address, (error, {longitude, latitude, location}) => {
            if(error) {
                return res.send({ error })
            }
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                     return res.send ({ error })
                }
                    res.send({
                        forecast: forecastData,
                        location,
                        address: req.query.address
                    })
            })
        })
        // res.send({
        //     Location: 'Lagos',
        //     forecast: 'It is heavy harmattan',
        //     address: req.query.address
        // })

})
app.get('/help/*', (req, res) => {
    res.send('Help articles not found');
})

app.get("*", (req, res) => {
    res.render('404', {
        name: 'Olaide Emmanuel',
        title: '404',
        errorMessage: 'Page not found',
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
