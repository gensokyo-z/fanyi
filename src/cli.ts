import * as commander from 'commander';

const program = new commander.Command();
program.version('0.0.1')
    .name('fy')
    .usage('<word>')
    .arguments('<word>')
    .action((word) => {
        console.log(word);
    });



program.parse(process.argv)