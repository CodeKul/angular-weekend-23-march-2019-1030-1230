import mysql from 'mysql'
export class DbConfig {

    constructor(  ) {
        this.connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'melayer',
            database: 'codekul',
            socketPath: '/var/run/mysqld/mysqld.sock'
        });
    }

    myCon() {
        return this.connection
    }
}