const fse = require('fs-extra')

let fileEnsured = false
function saveErrorLogs (error) {
    const date = new Date()
    const filePath = `logs/${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.log`
    if (!fileEnsured) {
        fse.ensureFile(filePath)
            .then(() => { fileEnsured = true })
            .catch(() => { fileEnsured = false })
    }

    const errorLogs = `
    
    Time : ${date.toTimeString()}
    ${error.message}
    ${error.stack.toString()}
    `
    fse.appendFile(filePath, errorLogs)
        .catch(e => console.log(e))
}

module.exports = {
    saveErrorLogs
}
