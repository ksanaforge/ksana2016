rem uglify only support es5
rem browserify ksanalibindex.js --bare -x codemirror -x react -x react-dom -u react-native  > ksanalib.js
browserify ksanalibindex.js --bare -x codemirror -x react -x react-dom -u react-native | uglifyjs -m -c=dead_code,evaluate,loops,unused > ksanalib.min.js
copy/y ksanalib.min.js ..\node_modules\ksana-corpus-lib\