# ksana2016

==create ksanalib.min.js==
    makeksanalib.cmd

==update npm module ksana-corpus-lib==

    makeksanalib-dev.cmd
    cd p/node_modules/ksana-corpus-lib
    increase version in package.json
    git commit
    npm publish

==Folders==

    ./node_modules installed by npm i
    ./p/node_modules installed by git


==Reference==

browserify+redux+react hot reloader+babel

features:
https://github.com/milankinen/livereactload

https://www.codementor.io/javascript/tutorial/es2015-project-setup-browserify-babel-hot-reloading

ksana libraries in ksana/node_modules ,3rd party libries in node_modules, Application under ksana folder

