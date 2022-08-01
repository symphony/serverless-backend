import { FunctionParser } from "firebase-backend";

export default new FunctionParser({ rootPath: __dirname, verbose: true, exports }).exports;