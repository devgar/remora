#!/usr/bin/env node

require('yargs')
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
}, require('./lib/github/create-repo') )
.command("clone", "Clones a remote repository from github")
.command("fork", "Forks a repo from another user")
.command("delete", "Deletes a repo")
.command("edit", "Edits an existing repo")
.demand(1, "must provide a valid command")
.help("h")
.alias("h", "help")
.argv;
