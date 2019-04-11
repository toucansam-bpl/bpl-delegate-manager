import { Command } from '@oclif/command'
import fetch from 'node-fetch'

// {"success":true,"syncing":false,"blocks":322,"height":2830995,"id":"4340550761883183060"}
// {"success":true,"syncing":false,"blocks":-9,"height":2831347,"id":"16500256323577757008"}
// {"success":true,"syncing":false,"blocks":-20,"height":2831396,"id":"9154458450546454046"}

interface NodeSyncStatus {
  syncing: boolean,
  blocks: number,
}

async function getNodeStatus() : Promise<NodeSyncStatus> {
  return new Promise(async (resolve, reject) => {
    try {
      const raw = await fetch('http://localhost:9030/api/loader/status/sync')

      const response = await raw.json()
      resolve(response)
    }
    catch (ex) {
      reject(ex)
    }
  })
}

export class MonitorCommand extends Command {
  async run() {
    try {
      console.log('Fetching BPL Node status.')
      const status = await getNodeStatus()

      // 40 blocks is at least a 10 minute time differential
      if (!status.syncing && status.blocks > 40) {
        await this.config.runHook('node-out-of-sync', {})
      }
    }
    catch (ex) {
    /*
      if (ex.code) {
        await this.config.runHook('node-out-of-sync', { id: 'out of sync' })
      }
    */
      throw ex
    }
  }
}
