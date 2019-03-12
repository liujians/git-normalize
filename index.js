#!/usr/bin/env node

'use strict';

const yargs = require('yargs');

let program = yargs
  .commandDir('cmds')
  .demandCommand(1, '请至少提供一个命令!')
  .help('h');

program.argv;
