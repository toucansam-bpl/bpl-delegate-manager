import { Command } from '@oclif/command'
import { flags } from '@oclif/parser'
import { spawn } from 'child_process'


export class MonitorLogsCommand extends Command {
  static flags = {
    lines: flags.integer(),
  }

  async run() {
    const { flags } = this.parse(MonitorLogsCommand)
    const commandArgs = ['pm2', 'logs', 'bpl-monitor']
    const flagArgs = flags.lines ? ['--lines', flags.lines.toString()] : []

    spawn('npx', commandArgs.concat(flagArgs), { stdio: 'inherit' })
  }
}
