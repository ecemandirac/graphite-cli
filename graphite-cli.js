#!/usr/bin/env node

var commander = require('commander');
var commands = require('./lib/commands');

if (!process.env.GRAPHITE_CLI_URL) {
    console.log('Error: GRAPHITE_CLI_URL is not set');
    process.exit(1);
}

commander.version('0.1.0');

commander.command('cat <dashboard-name>')
    .description('Dumps raw dashboard definition')
    .action(commands.cat);

commander.command('cp <source-dashboard-name> <target-dashboard-name>')
    .description('Copy source dashboard to target dashboard')
    .option('-f, --force', 'Forces an override for existing target')
    .action(commands.cp);

commander.command('diff <source-dashboard-name> <target-dashboard-name>')
    .description('Lists the difference in graphs between source and target dashboards')
    .action(commands.diff);

commander.command('dump <dashboard-name>')
    .description('Dumps dashboard JSON to a file of the same name')
    .option('-p, --path <path>', 'Path to which dashboards are dumped')
    .action(commands.dump);

commander.command('dump-graphs <dashboard-name>')
    .description('Dumps pretty printed graphs in custom format to file of same name')
    .action(commands.dumpGraphs);

commander.command('ls [search]')
    .description('Lists dashboards')
    .action(commands.ls);

commander.command('ls-graphs <dashboard-name>')
    .description('Lists graphs in a dashboard')
    .action(commands.lsGraphs);

commander.command('ls-targets <dashboard-name>')
    .description('Lists all targets in all graphs in a dashboard')
    .action(commands.lsTargets);

commander.command('mv <source-dashboard-name> <target-dashboard-name>')
    .description('Move source dashboard to target dashboard')
    .action(commands.mv);

commander.command('repl')
    .description('Starts an interactive dashboard repl')
    .action(commands.repl);

commander.command('rm <dashboard-name>')
    .description('Delete a dashboard')
    .action(commands.rm);

commander.command('save-dump <dump-file>')
    .description('Saves dump back to dashboard')
    .action(commands.saveDump);

commander.command('save-graphs <dump-file>')
    .description('Saves graphs dump back to dashboard')
    .action(commands.saveGraphs);

commander.command('touch <dashboard-name>')
    .description('Create a new empty dashboard')
    .action(commands.touch);

commander.parse(process.argv);
