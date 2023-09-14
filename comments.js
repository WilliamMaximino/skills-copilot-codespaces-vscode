//create web server
const http = require('http');
const port = 3000; // Porta em que o servidor vai escutar

// Função de callback para lidar com as solicitações HTTP
const requestHandler = (request, response) => {
  console.log(`Recebido um pedido para URL: ${request.url}`);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Olá, mundo!\n');
};

// Criação do servidor HTTP
const server = http.createServer(requestHandler);

// Inicialização do servidor para escutar na porta especificada
server.listen(port, (err) => {
  if (err) {
    return console.error(`Erro ao iniciar o servidor: ${err}`);
  }

  console.log(`Servidor está escutando em http://localhost:${port}`);
});

