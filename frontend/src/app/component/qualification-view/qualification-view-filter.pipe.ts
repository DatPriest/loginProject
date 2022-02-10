import {Pipe, PipeTransform} from "@angular/core";
import {Qualification} from "../../model/Qualification";


@Pipe({
  name: 'qualificationFilter'
})
export class QualificationFilterPipe implements PipeTransform{
  transform(qualifications: Qualification[], searchTerm: string): Qualification[] {
    if (!qualifications || !searchTerm){
      return qualifications;
    }
    var match="^[0-9]";
    if (searchTerm.match(match)){
      return qualifications.filter(qualification => qualification.id.toFixed().indexOf(searchTerm.toLowerCase()) !== -1);
    }
    else {
      return qualifications.filter(qualification => qualification.designation.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }

  }

}
