#!/usr/bin/env node

const yargs = require('yargs');

var argv = yargs
.count('verbose')
.alias('v', 'verbose')
.option('organization', {alias: 'o'})
.command("create <name> [url]", "Creates a repo", yargs => {
  return yargs
  .option("silent", {alias:'s', default: false,
    description: "Silent mode"})
  .option("description", {alias:'d',
    description: "Set project description"})
  .option("init", {alias: 'i', default: false,
    description: "Auto-initialize repo"})
  .option("languaje",{alias: 'l',
    description: "Define languaje for '.gitignore', ignored if not init"})
  .option("license",{alias: 'L',
    description: "Define license, ignored if not init"})
}, args => {
  console.log("Create repo\n", args);
})
.command("fork", "Forks a repo from another user")
.command("delete", "Deletes a repo")
.command("edit", "Edits an existing repos")
.demand(1, "must provide a valid command")
.help("h")
.alias("h", "help")
.argv;
