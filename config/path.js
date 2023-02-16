const path = require("path");
const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);
module.exports = { resolveApp };
