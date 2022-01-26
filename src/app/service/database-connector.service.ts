import { Injectable } from '@angular/core';
import { Pool, PoolClient } from 'pg';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectorService {
  private pool : Pool;
  constructor() {
    this.pool = new Pool ({
      user: "employee",
      host: "localhost",
      database: "employee_db",
      password: "secret",
      port: 5432
    })
    this.pool.on('error', (err, client) => {
      console.error("Unexpected Error:", err);
    });
  }
}
