const util = require('util')
const exec = util.promisify(require('child_process').exec)
const fifteenMinutes = 15 * 60 * 1000

console.log(`Starting BPL node monitor...`)

async function checkNodeStatus() {
  const { stdout, stderr } = await exec('bpl-dms monitor run')
  console.log('stdout:', stdout)
  console.log('stderr:', stderr)
}

setInterval(() => checkNodeStatus(), fifteenMinutes)
