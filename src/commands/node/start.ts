import { Command } from '@oclif/command'
import { homedir } from 'os'
import { resolve } from 'path'
import { connect, disconnect, start, } from 'pm2'


export class NodeStartCommand extends Command {
  async run() {
    connect(err => {
      if (err) {
        console.log(err)
        process.exit(2)
      }

      console.log(resolve(__dirname, 'bpl-node.ecosystem.config.js'))
      const nodeOptions = {
        args: ['--genesis', 'genesisBlock.mainnet.json', '--config', 'config.mainnet.json'],
        cwd: resolve(homedir(), 'BPL-node'),
        name: 'bpl-node',
        script: 'app.js'
      }

      start(nodeOptions, (err, apps) => {
        disconnect()

        if (err) throw err
      })
    })
  }
}
