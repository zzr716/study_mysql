const mysql = require('mysql')
const config = require('./../../config')
const dbConfig = config.database
const pool = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USERNAME,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
})
// console.log(pool)
// 查询的封装
let query = function (sql, value) {
    return new Promise((resolve, reject) => {
        // connection 连接的句柄
        pool.getConnection(function(err, connection) {
            if (err) {
                console.log(err)
                resolve(err)
            } else {
                connection.query(sql, value, (err, rows) => {
                    if (err) {
                        console.log(err)
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}
module.exports = {
    query
}