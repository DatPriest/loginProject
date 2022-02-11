import {Pipe, PipeTransform} from "@angular/core";
import {Qualification} from "../../model/Qualification";


@Pipe({
  name: 'qualificationFilter'
})
export class QualificationFilterPipe implements PipeTransform {
  transform(qualifications: Selection[], searchTerm: string): Selection[] {
    if (!qualifications || !searchTerm){
      return qualifications;
    }
    var match="^[0-9]";
    console.log("trying to match")
    if (searchTerm.match(match)){
      return qualifications.filter(qualification => qualification.index.toFixed().indexOf(searchTerm.toLowerCase()) !== -1);

    } else {
      return qualifications.filter(qualification => qualification.qualification.designation.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }

  }

}

class Selection {

  constructor(public index : number, public qualification : Qualification, public checked : boolean) {}
}
