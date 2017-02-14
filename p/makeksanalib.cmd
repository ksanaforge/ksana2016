browserify ksanalibindex.js --bare -x codemirror -x react -x react-dom -u react-native -o ksanalib.js
uglifyjs ksanalib.js > ksanalib.min.js