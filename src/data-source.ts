import {DataSource} from "typeorm";
import "reflect-metadata"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'casemd5',
    username: 'root',
    password: '123456',
    synchronize: false,
    entities: ['dist/src/model/*.js']
});