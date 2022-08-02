#!/usr/bin/env node
const program = require('commander')
program.version(require('./package').version)
program.command('init <project> [options...]')
    .description('init project name')
    .action(require('./lib/index.js'))

program.parse(process.argv)