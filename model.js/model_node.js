

const mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Savita@123",
  database:"project"

});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//         con.query("CREATE DATABASE project", function (err, result) {
//           if (err){;
//           console.log(" alredy  created");
//           }else{
//               console.log("database creted")
//           }
//         });
//       });
    


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE project (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});




knex.schema.createTable('cars', function (table) {
  
  table.string('name');
  table.string('password');
})
.then(()=>console.log("table created"))
.catch((err) => { console.log("alredy created") })
