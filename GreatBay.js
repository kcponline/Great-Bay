var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "exWHYzee123", //Your password
    database: "eBAY_db"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

connection.query('SELECT * FROM products',function(err,rows){
  if(err) throw err;
  for (i = 0; i < rows.length; i++) {
  	console.log("| " + rows[i].id + " | " + rows[i].item + " | " + rows[i].price + " | " + rows[i].category + " |");
  }
});

connection.query('SELECT * FROM users',function(err,rows){
  if(err) throw err;
  for (i = 0; i < rows.length; i++) {
  	console.log("| " + rows[i].id + " | " + rows[i].user_name + " | " + rows[i].email + " | " + rows[i].priviledge + " |");
  }
});

// connection.query('SELECT * FROM products WHERE genre=? OR genre=?', ['Classic', 'Dance'], function(err,rows){
//   if(err) throw err;
//   for (i = 0; i < rows.length; i++) {
//   	console.log("| " + rows[i].ID + " | " + rows[i].item + " | " + rows[i].price + " |");   }
// });

connection.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});