import {Injectable} from '@angular/core';
import Formation from '../model/Formation';
import {FormationApi} from '../api/FormationApi';

@Injectable()
export class FormationService {

  constructor(private formationApi: FormationApi){}

  // getFormations(): Array<Formation> {
  //   return[
  //       new Formation('Module Angular'),
  //       new Formation('Module JavaScript'),
  //       new Formation('Module TypeScript'),
  //   ];
  // }

  getFormations(): Promise<Array <Formation> > {
      return this.formationApi.fetchFormation();
  }
}
