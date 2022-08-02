const program = require('commander');

const createProjectAction = require('./action')
// new command

const createCommand = () => {
    program.command('create <project> [options...]')
        .description('clone repository into a folder')
        .action(createProjectAction)
}

module.exports = { createCommand };