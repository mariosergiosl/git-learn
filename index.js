const readline = require('readline-sync')

function start(){
	const content = {}

	content.searchTerm = askAndReturnsearchTerm()
	content.prefix = askAndReturnPrefix()

	function askAndReturnsearchTerm() {
		return readline.question('digite um termo de pesquisa na Wikipedia: ')
	}

	
	function askAndReturnPrefix() {
		const prefixes = ['who is', 'what is', 'the history of']
		const selectdPrefixIndex = readline.keyInSelect(prefixes)
		const selectdPrefixText = prefixes[selectdPrefixIndex]

		/** 
		console.log(selectdPrefixIndex)
		console.log(selectdPrefixText)
		**/
		return selectdPrefixText
	}

	console.log(content)
}

start()
