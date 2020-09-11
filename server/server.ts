import app from './src/app'
import chalk from 'chalk'

const port = process.env.PORT || 8089

app.listen(port, () => {
  console.log(chalk.green('this server is run at port: ' + port))
  console.log(chalk.green(`http://localhost:${port}`))
})