import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from '../../model/Employee';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform{
  transform(employees: Employee[], searchTerm: string): Employee[] {
    if (!employees || !searchTerm){
      return employees;
    }
    var match="^[0-9]";
    if (searchTerm.match(match)){
      return employees.filter(employee => employee.id.toFixed().indexOf(searchTerm.toLowerCase()) !== -1);
    }
    else {
      return employees.filter(employee => employee.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }

  }





}
