/*
const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 8000
*/
var express = require('express');

var app = express();

app.use(express.static('public'));

//make way for some custome css, js, and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/videos', express.static(__dirname + '/public/videos'));

var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});
/*
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if(error)
        {
            res.writeHead(404)
            res.write('Error: File not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if(error) {
        console.log('something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})*/