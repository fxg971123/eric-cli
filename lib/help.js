const program = require('commander');

const helpOption = () => {
   /*  program.option('-h, --help', 'show help', () => {
        console.log(`
        Options:
        $ node index.js [options]
        $ node index.js -h
        $ node index.js -V
        $ node index.js -d /Users/user/Desktop/
        `);
        process.exit(0);
    }).parse(process.argv); */    
    program.on('--help', () => {
        console.log('hello world');
    });
}


module.exports = { helpOption };
