var dbconfig = {
    development: {
        server: '192.168.1.6',
        database:'team1_web_labDB',
        user:'sa',
        password:'Wachirawit2002',
        port: 1433,
        options:{
            encrypt: true, // Use this if you're on Windows Azure
            setTimeout: 30000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.1.6'  // SQL Server instance name
        }
    },
    production: {
        server: '192.168.1.6',
        database:'team1_web_labDB',
        user:'sa',
        password:'Wachirawit2002',
        port: 1433,
        options:{
            encrypt: true, // Use this if you're on Windows Azure
            setTimeout: 30000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.1.6'  // SQL Server instance name
        }
    },

 };


module.exports = dbconfig;
