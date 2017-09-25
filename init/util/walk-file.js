const fs = require('fs')
/**
 * 遍历目录下的文件目录
 * @param {string} pathResolve 需进行遍历的目录路径
 * @param {string} mime 遍历文件的后缀名
 * @return {object} 返回遍历的目录结果
 */
const walkFile = function(pathResolve, mime) {
    // readdirSync停下来遍历目录 目录路径要绝对路径
    let files = fs.readdirSync(pathResolve)
    console.log(files)
    let fileList = {}
    for (let [i, item] of files.entries()) {
        let itemArr = item.split('\.')
        let itemMime = (itemArr.length>1)?
        itemArr[itemArr.length-1]:'undefined'
        // 文件+ ''  将对象字符串化
        // 1+ ''
        // 文件名
        // 强类型转换 String() Number() 也可以如下
        let keyName = item + ''
        // console.log(itemMime, keyName)
        if (mime === itemMime) {
            fileList[item] = pathResolve + '/' + item
        }
    }
    return fileList
}
module.exports = walkFile
