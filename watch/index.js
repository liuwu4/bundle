const fs = require('fs'),
    path = require('path'),
    childProcess = require('child_process');
const local = (...args) => {
    let result = path.resolve();
    if (args.length) {
        result = args.map(item => path.resolve(item));
    }
    return result;
};
const watchPath = local('webpack.config.js');

watchPath.forEach(item => {
    fs.watch(item, (eventType, filename) => {
        if (eventType === 'change') {
            console.log('改变了内容', filename);
            const cmd = filename === 'webpack.config.js' ? 'yarn buildProduction' : 'yarn develop && yarn start';
            startProcess(cmd)
        }
    });
});

function startProcess(cmd) {
    console.log(
        'cmd',
        cmd
    );
    childProcess.execSync(cmd, (error, stdout, stderr) => {
        console.log('stdout:', stdout);
        if (!error) {
            console.log("执行命令成功:\n", cmd);
        } else {
            console.log("执行命令异常: \n", error)
        }
    })
}
