import {Injectable} from '@angular/core';
import Formation from '../model/Formation';
import {FormationApi} from '../api/FormationApi';

@Injectable()
export class FormationService {

  constructor(private formationApi: FormationApi){}

  // Appel SYNCHRONE
  // getFormations(): Array<Formation> {
  //   return[
  //       new Formation('Module Angular'),
  //       new Formation('Module JavaScript'),
  //       new Formation('Module TypeScript'),
  //   ];
  // }

  // Appel ASYNCHRONE
  getFormations(): Promise<Array <Formation> > {
      return this.formationApi.fetchFormation();
  }
}
