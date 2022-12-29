const childProcess = require('child_process')

if (!process.env.GAE_ENV) {
  childProcess.execSync('npx nuxi prepare ', {
    stdio: 'inherit',
  })
}
