/**
 *  Encode a string to json formar
 * @param {number} string
 * @returns {string}
 */
function jsonEncode(string) {
  return JSON.stringify(string);
}

/**
 *
 * @param {string} string
 * @returns {Object}
 */
function jsoDecode(string) {
  return JSON.parse(string);
}

module.exports = { jsonEncode, jsoDecode };
