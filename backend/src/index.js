const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Rota / recurso

/** 
 ** Metodos HTTP
 * GET: Buscar/Listar uma informação no back end
 * POST: Criar uma informação no back end
 * PUT: Alterar uma informação no back end
 * DELETE: Deletar uma informação no back end
*/

/**
 * Tipos de parametros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota apos o simbolo de "?" ( Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Driver: Select * from users
  * query Builder: table('users').select('*').
  */



app.listen(3333);