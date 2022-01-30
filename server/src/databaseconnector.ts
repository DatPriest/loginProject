import { Sequelize, DataTypes, Model } from 'sequelize';
import Employee from '../../frontend/src/app/model/Employee';
import { Config } from './config';


export class DataBaseConnector {
    async test() {
        // Option 1: Passing a connection URI
        const sequelize = new Sequelize(`postgres://${Config.user}:${Config.password}@${Config.host}:${Config.port}/${Config.db}`, {logging: console.log}) // Example for postgres
        try {
            await sequelize.authenticate();
            sequelize
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}