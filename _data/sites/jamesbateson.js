module.exports = {
	name: "jamesbateson.co.uk", // optional, falls back to object key
	description: "Personal website",
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://jamesbateson.co.uk/",
		"https://jamesbateson.co.uk/about/",
		"https://jamesbateson.co.uk/articles/",
		"https://jamesbateson.co.uk/projects/",
		"https://jamesbateson.co.uk/journal/",
		"https://jamesbateson.co.uk/resume/",
		// Current Projects
		"https://jamesbateson.co.uk/project/jatalie-heights/",
		"https://jamesbateson.co.uk/project/isveggiemanhere/",
		// Posts
		"https://jamesbateson.co.uk/articles/building-a-simple-todo-app-with-vue-js/",
		"https://jamesbateson.co.uk/articles/switching-to-variable-fonts/",
	]
};