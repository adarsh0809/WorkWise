import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    // added this due to error
    if (!file) {
        throw new Error("File not found");
    } 
    // upto here

    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;