const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')


module.exports = async name => {
    clear()
    const data = await figlet('eric welcome')
    log('🚀create project' + name)
    await clone('direct:https://github.com/fxg971123/parceltemplate.git#main',name)
}