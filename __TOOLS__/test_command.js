'use strict'
const spawn = require('child_process').spawn
const target = process.env.t
const testEnv = '__TOOLS__/test_setup.js'

let command
if(target){
	command = spawn('mocha', [testEnv, '--colors', `__TEST__/${target}.test.js`])
}else{
	command = spawn('mocha', [testEnv, '--colors', `__TEST__/*.test.js`])
}

command.stdout.on('data', (data) => {
	console.log(data.toString())
})

command.stderr.on('data', (data) => {
	console.log('this is stderr')
	console.log(data.toString())
})

command.on('exit', (code) => {
	console.log('mocha command over')
})


