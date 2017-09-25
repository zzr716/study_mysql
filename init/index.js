const fs = require('fs')
// 找到sql
const getSqlContentMap = require('./util/get-sql-content-map')
// 数据库的链接
const { query } = require('./util/db')
let sqlContentMap = getSqlContentMap()
// console.log(sqlContentMap)
const eventLog = function (err, sqlFile, index) {
    console.log(`[success]sql脚本文件:${sqlFile}第${index+1}条脚本执行成功`)
}
// 创造所有的数据表
const createAllTables = async() => {
    // json对象
    for (let key in sqlContentMap) {
        // 每个数据库文件二进制
        // ;隔开  分割 sql语句
        // 有sql语句就能query执行
        let sqlShell = sqlContentMap[key]
        let sqlShellList = sqlShell.split(';')
        for (let [i, shell] of sqlShellList.entries()) {
            if (shell.trim()) {
                let result = await query(shell)
                // if (result.serverStatus * 1 === 2) {}
                eventLog(true, key, i)
            }
        }

    }
    console.log('sql执行脚本结束!')
    console.log('请按ctrl+c键退出!')
}
createAllTables()