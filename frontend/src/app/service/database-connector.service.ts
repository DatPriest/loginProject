import { Injectable } from '@angular/core';
import { Sequelize } from 'sequelize';
@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectorService {
  constructor() {
  const sequelize = new Sequelize('postgres');

    /*this.pool = new Pool ({
      user: "employee",
      host: "localhost",
      database: "employee_db",
      password: "secret",
      port: 5432
    })
    /*this.pool.on('error', (err, client) => {
      console.error("Unexpected Error:", err);
    });*/
  }
}
