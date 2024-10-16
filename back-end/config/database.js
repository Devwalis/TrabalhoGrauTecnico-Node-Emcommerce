const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbe'        
});

connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao Banco de Dados:', err);
      return;
    }
    console.log('Conectado ao Banco de Dados');
  });

 