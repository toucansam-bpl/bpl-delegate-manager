import { Command } from '@oclif/command'
import { flags } from '@oclif/parser'
import { spawn } from 'child_process'


export class NodeLogsCommand extends Command {
  static flags = {
    lines: flags.integer(),
  }

  async run() {
    const { flags } = this.parse(NodeLogsCommand)
    const commandArgs = ['pm2', 'logs', 'bpl-node']
    const flagArgs = flags.lines ? ['--lines', flags.lines.toString()] : []

    spawn('npx', commandArgs.concat(flagArgs), { stdio: 'inherit' })
  }
}
