const PORT = process.env.PORT || 8080;

const express = require('express');
var app = express();
var server = require('http').createServer(app);

//app.use(require('./public/index'));
app.use(express.static('public'));
//archivos estaticos
//app.use(express.static(path.join(__dirname,'public')));


// Inicializar el servidor
server.listen(PORT, ()=> {
	console.log(`Servidor Inicializado en http://localhost:${PORT}`);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});