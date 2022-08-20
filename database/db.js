const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:	'localhost',
    user:   'root',
    password: 'root',
    database: 'crud-node-mysql'

})

conexion.connect((error)=>{
    if(error){
        console.error('el error de conexion es : '(error));
        return
    }
    console.log('base de datos conectada!');
})

module.exports = conexion;