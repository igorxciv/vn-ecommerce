module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['chg', 'new', 'fix']],
		'scope-case': [2, 'always', 'upper-case'],
	},
}
