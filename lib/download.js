const { promisify } = require('util')
// const program = require('commander')
module.exports.clone = async (repo, desc) => {
    const download = promisify(require('download-git-repo'))
    const inquirer = require('inquirer')
    const fs = require('fs')
    const handlebars = require('handlebars')

    const ora = require('ora')
    const process = ora(`download...${repo}`)
    process.start()
    await download(repo, desc, { clone: true }, err => {
        console.log(err ? err : 'success')
        process.succeed()
        inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'project name'
        }, {
            type: 'input',
            name: 'description',
            message: 'description'
        }, {
            type: 'input',
            name: 'author',
            message: 'author'
        }]).then((answers) => {
            console.log(`cd ${desc}`)
            console.log(`yarn`)
            console.log(`yarn start`)
            const packagePath = `${desc}/package.json`
            const packageContent = fs.readFileSync(packagePath, 'utf8')
            const packageResult = handlebars.compile(packageContent)(answers)
            fs.writeFileSync(packagePath, packageResult)
            /* program.command('yarn').action(() => {
                console.log('yarn')
               
            }) */
            console.log('Success')
            
        })
    })
}

