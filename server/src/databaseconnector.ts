import { Sequelize, DataTypes, Model } from 'sequelize';
import { Config } from './config';
import {Qualification} from './model/Qualification';

export var sequelize = new Sequelize(`postgres://${Config.user}:${Config.password}@${Config.host}:${Config.port}/${Config.db}`, {logging: console.log}) // Example for postgres


export class DataBaseConnector {
    sequelize : Sequelize = new Sequelize(`postgres://${Config.user}:${Config.password}@${Config.host}:${Config.port}/${Config.db}`, {logging: console.log}) // Example for postgres
    constructor() {
        console.log("lol")


    }
    async test() {
        // Option 1: Passing a connection URI
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            this.create()
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    async drop() {
        sequelize.drop();
    }

    async create() {
        Qualification.create({designation: 12})
        console.log("Created Qualification");
    }
}