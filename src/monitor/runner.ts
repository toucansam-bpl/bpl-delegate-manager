const util = require('util')
const exec = util.promisify(require('child_process').exec)

console.log(`Starting BPL node monitor...`)

async function checkNodeStatus() {
  const { stdout, stderr } = await exec('bpl-dms monitor')
  console.log('stdout:', stdout)
  console.log('stderr:', stderr)
}

setInterval(() => checkNodeStatus(), 10000)
