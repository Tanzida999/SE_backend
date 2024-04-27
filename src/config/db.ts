import mysql from 'mysql';

const config = {
    db: {
      host: "localhost",
      user: "root",
      password: "Arj185417",
      database: "mad",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };

async function query(sql) {
    const connection = mysql.createConnection(config.db);
    // connection.connect();
    // const results = await connection.query(sql);
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    });
    // return results;
}

export default {config, query};