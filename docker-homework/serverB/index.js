//Load express module with `require` directive

var express = require('express');
var mysql      = require('mysql');

const connect = () => {
    var connection = mysql.createConnection({
        host     : 'db',
        user     : 'root',
        password : '123456',
        database : 'my_db',
        port: 3306
      });
    
    connection.connect();
      
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
}

var app = express();
let connectCount = 0;

//Define request response in root URL (/)  
app.get('/', function (req, res) {  
 res.send('Hello World!')  
})

app.get('/connect', function (req, res) {  
  connect();
  res.send('DB connection!' + ++connectCount)  
 })
 

//Launch listening server on port 8081  
app.listen(5000, function () {  
  console.log('app listening on port 5000!')  
})