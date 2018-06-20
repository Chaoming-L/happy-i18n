
const _config = {
  "importStatement": "import {i18next} from 'gm-i18n';",
  "callStatement": "i18next.t",
  "targetDir": "i18n-messages",
  "exclude": []
}
const path = require('path');
module.exports = function () {
  let config = {};
  try {
    config = require(path.join(process.cwd(), 'i18n.config.json'));
  } catch(e) {
    config = {};
  }
  return Object.assign({}, _config, config);
}
