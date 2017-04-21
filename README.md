# ksana2016

require node.js 7.9.0 or above

browserify+redux+react hot reloader+babel

features:
https://github.com/milankinen/livereactload

https://www.codementor.io/javascript/tutorial/es2015-project-setup-browserify-babel-hot-reloading


ksana libraries in ksana/node_modules ,3rd party libries in node_modules, Application under ksana folder

npm i -g uglifyjs browerify watchify

to start development

	cd "ksana-app"
    http-server   // or any other web server
    npm start  

build separate bundle for react 
	
	react-bundle.cmd
	codemirror-bundle.cmd


production build

    npm run build

deploy index.html css and all files in ./static