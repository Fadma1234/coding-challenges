/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(() => resolve(millis), millis));
}

module.exports = { sleep };