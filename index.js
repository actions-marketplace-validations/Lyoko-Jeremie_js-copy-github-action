const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');
const copy = require('copy');

try {
    const sourceFile = core.getMultilineInput('source');
    const targetFile = core.getInput('target');
    const cwd = core.getInput('cwd', {required: false}) || undefined;
    const srcBase = core.getInput('srcBase', {required: false}) || undefined;
    const destBase = core.getInput('destBase', {required: false}) || undefined;
    const modeOne = core.getInput('one', {required: false}).length > 0;
    const modeMulti = core.getInput('multi', {required: false}).length > 0;
    console.log(`Copying "${sourceFile}" to "${targetFile}"`);
    console.log(`modeOne:${modeOne} , modeMulti:${modeMulti}`);
    console.log(`cwd:${cwd} , srcBase:${srcBase} , destBase:${destBase}`);

    const opt = {cwd: cwd || process.cwd(), destBase: destBase, srcBase: srcBase};
    console.log(`opt:${opt}`);

    if (modeOne) {
        console.log(`run in modeOne`);
        copy.one(sourceFile[0], targetFile, opt, (err, files) => {
            if (err) {
                core.setFailed(err);
            }
            console.log(files);
        });
    } else if (modeMulti) {
        console.log(`run in modeMulti`);
        copy.each(sourceFile, targetFile, opt, (err, files) => {
            if (err) {
                core.setFailed(err);
            }
            console.log(files);
        });
    } else {
        console.log(`run in normal`);
        copy(sourceFile[0], targetFile, opt, (err, files) => {
            if (err) {
                core.setFailed(err);
            }
            console.log(files);
        });
    }
} catch (error) {
    core.setFailed(error.message);
}
