import Sequelize from "sequelize";
import { DataTypes } from "sequelize/dist";
import { Model } from "sequelize/dist/lib/model";
import { DataBaseConnector, sequelize } from "../databaseconnector";

export class Qualification extends Model { }

Qualification.init({
  id: {type: DataTypes.INTEGER, allowNull: false, defaultValue: false, autoIncrement: true},
  designation: {type: DataTypes.TEXT, defaultValue: ""}
}, {
  sequelize : sequelize, 
  modelName : 'qualification',
  createdAt : true
});