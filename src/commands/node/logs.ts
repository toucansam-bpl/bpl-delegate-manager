import { Command } from '@oclif/command'
import { spawn } from 'child_process'


export class NodeLogsCommand extends Command {
  async run() {
    spawn('npx', ['pm2', 'logs', 'bpl-node'], { stdio: 'inherit' })
  }
}
