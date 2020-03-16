const http = require('http');
const net = require('net');
net.createServer((connection)=>{
    let body='';
    connection.setEncoding('utf8');
    connection.on("data", function (data) {
    body += data;
    console.log('body:', body);23
    });
    connection.on("end", function () {
        console.log('结束数据', body);
    });
    connection.on('close', function () {
        console.log('退出连接');
    });
}).listen(4018);