export class Station{

  constructor(public number: number,
              public contract_name: string,
              public name: string,
              public address: string,
              public banking: boolean,
              public bonus: boolean,
              public bike_stands:number,
              public available_bike_stands: number,
              public status: string,
              public last_update: number ){}
}
