import {Sequelize, DataTypes, Model} from 'sequelize';
export class Employee {
  constructor(public id?: number,
              public lastName?: string,
              public firstName?: string,
              public street?: string,
              public postcode?: string,
              public city?: string,
              public phone?: string) {
  }
}

export class EmployeeModel extends Model{
  declare id:number;
}

const sequelize = new Sequelize('sqlite::memory:');

EmployeeModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize });

const user = new EmployeeModel({ id: 1 });
user.id; // 1
