
/**
 * is function.
 *
 * @param {any} value
 * @return {boolean}
 */
function isFunction(value) {
    return (typeof value === 'function');
}

/**
 * rescue
 *
 * @param {Function} callback
 * @param {any} rescue
 * @return {any}
 */
module.exports = function(callback, rescue = null) {
    if (!isFunction(callback)) {
        return callback;
    }
    try {
        return callback();
    } catch (e) {
        return isFunction(rescue) ? rescue(e) : rescue;
    }
};
