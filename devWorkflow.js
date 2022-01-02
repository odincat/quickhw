const { exec } = require("child_process");
const chokidar = require('chokidar');

const watcher = chokidar.watch("styles/scss", { persistent: true });
var devServer;
var devServerOutput = false;

console.log("\x1b[34m\x1b[40m" + "<WebTypeCat development environment />" + "\x1b[0m");
console.log("\n");
console.log("⇄ Initializing..." + "\x1b[0m");
console.log("\n");

const launchDevServer = () => {
    console.log("\x1b[34m" + "⌁ Launching development server..." + "\x1b[0m");
    devServer = exec(`npm run dev`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    });
    console.log("\x1b[32m" + "✓ Launched development server! (http://localhost:3000)" + "\x1b[0m");
};


launchDevServer();

devServer.stdout.on('data', (data) => {
    if(devServerOutput) {
        console.log(data);
    }
});

console.log("\n");
console.log("\x1b[35m" + "⌁ Listening for Stylesheet changes..." + "\x1b[0m");
console.log("");

watcher.on('change', (path) => {
    console.log("\x1b[36m" + "[📁 " + getFileName(path) + ".scss | ⏲  " + getCurrentTime() + "] ↻ Change detected, recompiling..." + "\x1b[0m");

    exec(`yarn compileStyles ${path} --no-source-map styles/${getFileName(path)}.css`,(error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        } else if(!error) {
            console.log("\x1b[32m" + "[📁 " + getFileName(path) + ".scss | ⏲  " + getCurrentTime() + "] ✓ Compiled sucessfully" + "\x1b[0m");
        }
        if (stderr) {
            console.log("\x1b[33m" + `${stderr}` + "\x1b[0m");
            return;
        }
    });
})

const getFileName = (path) => {
    var seperateString;
    if(process.platform === 'linux') {
        seperateString = '/';
    } else {
        seperateString = '\\';
    }
    const wholePath = path.split(seperateString);
    const fileNameWithExtension = wholePath[wholePath.length - 1];

    const fileName = fileNameWithExtension.replace(/\.[^/.]+$/, "");

    return fileName;
}

/**
 * 
 * @param {*} int Number to process
 * @returns Formatted Number with the following format: If int under 10 -> 0int, else int
 */
const intTwoChars = (int) => {
    return (`0${int}`).slice(-2);
}

/**
 * 
 * @returns Current time in the following format: HH:mm
 */
const getCurrentTime = () => {
    let currentDate = new Date();

    let hours = intTwoChars(currentDate.getHours());
    let minutes = intTwoChars(currentDate.getMinutes());

    return hours + ":" + minutes;
};