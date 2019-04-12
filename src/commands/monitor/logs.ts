import { Command } from '@oclif/command'
import { flags } from '@oclif/parser'
import { spawn } from 'child_process'
import { resolve } from 'path'


export class MonitorLogsCommand extends Command {
  static flags = {
    lines: flags.integer(),
  }

  async run() {
    const { flags } = this.parse(MonitorLogsCommand)
    const pm2Path = resolve(__dirname, '..', '..', '..', 'node_modules', 'pm2', 'bin', 'pm2')
    const commandArgs = ['logs', 'bpl-monitor']
    const flagArgs = flags.lines ? ['--lines', flags.lines.toString()] : []

    console.log(pm2Path)
    spawn(pm2Path, commandArgs.concat(flagArgs), { stdio: 'inherit' })
  }
}
