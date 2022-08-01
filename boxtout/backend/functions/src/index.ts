import { FunctionParser } from 'firebase-backend';

exports = new FunctionParser({ rootPath: __dirname, verbose: true, exports }).exports;