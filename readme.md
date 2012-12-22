# Incorporate

Consolidate Your Javascripts.

---

Install with `npm` using:

	npm install inc -g

`incorporate.js` is a simple easy-to-use tool that makes working with client side javascripts much less painful. 

---

## In the terminal

	inc [incFile.js]
	
`incFile.js` defaults to `"inc.js"` if no argument is given.

---

## In the project

The `incFile.js` looks like this:

	module.exports = {
	    "export" : "script.js",
	    "files" : []
	};

It's the `module.exports` object with the `export` string and `files` array.

---

## To-Do

* create flag to create `incFile.js`
* watch `incFile.js` and update on changes