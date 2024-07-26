var dbconfig = {
    web_labDB: {
        server: '192.168.1.14',
        database:'team4_web_labDB',
        user:'sa',
        password:'PARNparn_212224236',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.1.14'  // SQL Server instance name
        }
    },

};
module.exports = dbconfig;
