export default class Formation {
  constructor(public nom: string,
              public description?: string){}

  toString () {
    return `${this.nom} | ${this.description} `;
  }

  print () {
    console.log( this.toString() );
  }
}
