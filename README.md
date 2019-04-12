bpl-delegate-manager
====================

Blockpool Delegate Manager

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bpl-delegate-manager.svg)](https://npmjs.org/package/bpl-delegate-manager)
[![Downloads/week](https://img.shields.io/npm/dw/bpl-delegate-manager.svg)](https://npmjs.org/package/bpl-delegate-manager)
[![License](https://img.shields.io/npm/l/bpl-delegate-manager.svg)](https://github.com/toucansam-bpl/bpl-delegate-manager/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bpl-delegate-manager
$ bpl-dms COMMAND
running command...
$ bpl-dms (-v|--version|version)
bpl-delegate-manager/0.5.1-0 darwin-x64 node-v11.13.0
$ bpl-dms --help [COMMAND]
USAGE
  $ bpl-dms COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bpl-dms autocomplete [SHELL]`](#bpl-dms-autocomplete-shell)
* [`bpl-dms help [COMMAND]`](#bpl-dms-help-command)
* [`bpl-dms monitor:logs`](#bpl-dms-monitorlogs)
* [`bpl-dms monitor:run`](#bpl-dms-monitorrun)
* [`bpl-dms monitor:start`](#bpl-dms-monitorstart)
* [`bpl-dms monitor:stop`](#bpl-dms-monitorstop)
* [`bpl-dms node:logs`](#bpl-dms-nodelogs)
* [`bpl-dms node:restart`](#bpl-dms-noderestart)
* [`bpl-dms node:start`](#bpl-dms-nodestart)
* [`bpl-dms node:stop`](#bpl-dms-nodestop)

## `bpl-dms autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ bpl-dms autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ bpl-dms autocomplete
  $ bpl-dms autocomplete bash
  $ bpl-dms autocomplete zsh
  $ bpl-dms autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.0/src/commands/autocomplete/index.ts)_

## `bpl-dms help [COMMAND]`

display help for bpl-dms

```
USAGE
  $ bpl-dms help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `bpl-dms monitor:logs`

```
USAGE
  $ bpl-dms monitor:logs

OPTIONS
  --lines=lines
```

_See code: [src/commands/monitor/logs.ts](https://github.com/toucansam-bpl/bpl-delegate-manager/blob/v0.5.1-0/src/commands/monitor/logs.ts)_

## `bpl-dms monitor:run`

```
USAGE
  $ bpl-dms monitor:run
```

_See code: [src/commands/monitor/run.ts](https://github.com/toucansam-bpl/bpl-delegate-manager/blob/v0.5.1-0/src/commands/monitor/run.ts)_

## `bpl-dms monitor:start`

```
USAGE
  $ bpl-dms monitor:start
```

_See code: [src/commands/monitor/start.ts](https://github.com/toucansam-bpl/bpl-delegate-manager/blob/v0.5.1-0/src/commands/monitor/start.ts)_

## `bpl-dms monitor:stop`

```
USAGE
  $ bpl-dms monitor:stop
```

_See code: [src/commands/monitor/stop.ts](https://github.com/toucansam-bpl/bpl-delegate-manager/blob/v0.5.1-0/src/commands/monitor/stop.ts)_

## `bpl-dms node:logs`

```
USAGE
  $ bpl-dms node:logs

OPTIONS
  --lines=lines
```

_See code: [src/commands/node/logs.ts](https://github.com/toucansam-bpl/bpl-delegate-manager/blob/v0.5.1-0/src/commands/node/logs.ts)_

## `bpl-dms node:restart`

```
USAGE
  $ bpl-dms node:restart
```

_See code: [src/commands/node/restart.ts](https://github.com/toucansam-bpl/bpl-delegate-manager/blob/v0.5.1-0/src/commands/node/restart.ts)_

## `bpl-dms node:start`

```
USAGE
  $ bpl-dms node:start

OPTIONS
  --log-level=debug|info|warn  (required) [default: debug] Log level for the bpl-node logs
  --node-dir=node-dir          (required) [default: /Users/bmavity/BPL-node] Directory containing bpl-node code
```

_See code: [src/commands/node/start.ts](https://github.com/toucansam-bpl/bpl-delegate-manager/blob/v0.5.1-0/src/commands/node/start.ts)_

## `bpl-dms node:stop`

```
USAGE
  $ bpl-dms node:stop
```

_See code: [src/commands/node/stop.ts](https://github.com/toucansam-bpl/bpl-delegate-manager/blob/v0.5.1-0/src/commands/node/stop.ts)_
<!-- commandsstop -->
