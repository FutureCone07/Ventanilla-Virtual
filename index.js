const express = require('express');
const app = express();
const path = require('path');

const host = '192.168.7.110'; // Acepta conexiones externas
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});
