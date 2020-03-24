const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET : Buscar informações do backend. 
  * POST : Criar uma informação do backend.
  * PUT:  Alterar uma informação do backend.
  * DELETE: Deletar uma informação do backend.
  */

  /**
   * Tipos de padrâmetros:
   * Query: Parâmetros nomeados, enviados na rota após "?", filtros, paginação.
   * Route Params: Parâmetros utilizados para identificar recursos.
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
   * 
   * 
   */
app.listen(3333);
