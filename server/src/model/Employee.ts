import { Model, Sequelize, DataTypes } from "sequelize";
import { DataBaseConnector, sequelize } from "../databaseconnector";

class Employee extends Model {
  constructor(
    public isd?: number,
    public lastName?: string,
    public firstName?: string,
    public street?: string,
    public postcode?: string,
    public city?: string,
    public phone?: string
  ) {
    super()
  }
}

Employee.init({
  id: {type: DataTypes.INTEGER, allowNull: false, defaultValue : false, autoIncrement: true},
  lastName: {type: DataTypes.TEXT, defaultValue: ""},
  firstName: {type: DataTypes.TEXT, defaultValue: ""},
  street: {type: DataTypes.TEXT, defaultValue: ""},
  postcode: {type: DataTypes.TEXT, defaultValue: ""},
  city: {type: DataTypes.TEXT, defaultValue: ""},
  phone: {type: DataTypes.TEXT, defaultValue: ""},
  
}, {
  sequelize : sequelize,
  modelName: "employee",
  createdAt : true
})
