const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
})

const contactRoutes = require('./api/contact/contact.routes');
const userRoutes = require('./api/user/user.routes');
// routes
app.use('/api/contact', contactRoutes);
app.use('/api/user', userRoutes);



const port = process.env.PORT || 8090;
app.listen(port);
console.log('API running at ', port);

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Access-Control-Allow-Origin': '*'
//     });
//     if (req.url.includes('/api/user')) {
//         console.log(req.url)
//         console.log(req)
//         app.use('/api/user', userRoutes);
//     }

//     // res.end('Hello, world!');
// }).listen(port);



