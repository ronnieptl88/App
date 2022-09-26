/* eslint-disable @lwc/lwc/no-async-await */
const fs = require('fs/promises');
const {existsSync} = require('fs');

const {OUTPUT_FILE_CURRENT} = require('../config');

/**
 * Writes the results of `getStats` to the {@link OUTPUT_FILE_CURRENT} file.
 *
 * @param {Object} stats
 * @param {string} stats.name - The name for the test, used in outputs.
 * @param {number} stats.mean - The average time for the test to run.
 * @param {number} stats.stdev - The standard deviation of the test.
 * @param {number} stats.entries - The data points
 * @param {number} stats.runs - The number of times the test was run.
 * @param {string} [path] - The path to write to. Defaults to {@link OUTPUT_FILE_CURRENT}.
 */
module.exports = async (stats, path = OUTPUT_FILE_CURRENT) => {
    if (!stats.name || !stats.mean || !stats.stdev || !stats.entries || !stats.runs) {
        throw new Error('Invalid stats object');
    }

    if (!existsSync(path)) {
        await fs.writeFile(path, '[]');
    }

    try {
        const content = JSON.parse(await fs.readFile(path, 'utf8'));
        const line = `${JSON.stringify(content.concat([stats]))}\n`;
        await fs.writeFile(path, line);
    } catch (error) {
        console.error(`Error writing ${path}`, error);
        throw error;
    }
};
