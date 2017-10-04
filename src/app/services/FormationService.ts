import Formation from '../model/Formation';

export class FormationService {

  getFormations(): Array<Formation> {
    return[
        new Formation('Module Angular'),
        new Formation('Module JavaScript'),
        new Formation('Module TypeScript'),
    ];
  }
}
