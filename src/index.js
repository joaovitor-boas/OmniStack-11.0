const express = require ('express');
const routes = require ('./routes')


const app = express();

app.use(express.json());
app.use(routes);


/**
 * Rota / Recurso
 
 */

/**
 *   MÉTODOS HTTP
 * 
 * GET: Buscar/listar uma inforamção no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma irnformção no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetrops nomeados enviados na rota após "?" (Filstors, paginação)
  * Route Parms: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: Select * From Users
    * Query Builder: table('users').select('*').where()
    */


app.listen(3333);
