const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'world',
    password:'faranaz'
});

module.exports =pool.promise();
