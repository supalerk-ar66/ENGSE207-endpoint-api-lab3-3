var dbconfig = {
    development: {
        server: '192.168.1.17',
        database:'team4_web_labDB',
        user:'sa',
        password:'PARNparn_212224236',
        port: 1433,
        options:{
            encrypt: true, // Use this if you're on Windows Azure
            setTimeout: 30000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.1.17'  // SQL Server instance name
        }
    },
    production: {
        server: '192.168.1.17',
        database:'team4_web_labDB',
        user:'sa',
        password:'PARNparn_212224236',
        port: 1433,
        options:{
            encrypt: true, // Use this if you're on Windows Azure
            setTimeout: 30000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.1.17'  // SQL Server instance name
        }
    },

 };


module.exports = dbconfig;
