import { Model, Sequelize, DataTypes } from "sequelize/dist";
import { DataBaseConnector, sequelize } from "../databaseconnector";


class User extends Model{
}

User.init({
  id: {type: DataTypes.INTEGER, allowNull: false, defaultValue: false, autoIncrement: true},
  loginHash: {type: DataTypes.TEXT, defaultValue: ""},
  loginName: {type: DataTypes.TEXT, defaultValue: ""},
  isLocked: {type: DataTypes.BOOLEAN, defaultValue: false},
  isLockedSince: {type: DataTypes.TIME, defaultValue: "0000-00-00"},
}, {
  sequelize : sequelize, 
  modelName : 'user',
  createdAt : true
});
