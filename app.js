const os = require('os');
console.log('OS default directory for temp files : ' + os.tmpdir());
console.log("Endianness of system: " + os.endianness());
console.log("Hostname: " + os.hostname());
console.log("Operating system name: " + os.type());
console.log('operating system platform: ' + os.platform());
console.log("CPU architecture: " + os.arch())
console.log('OS release : ' + os.release());
console.log('OS uptime : ' + os.uptime());
console.log('OS loadavg : ' + os.loadavg());
console.log('OS cpus: ' + os.cpus());
console.log('List of network Interfaces: ' + os.networkInterfaces());
console.log("Total memory: " + os.totalmem());
console.log("Free memory: " + os.freemem());