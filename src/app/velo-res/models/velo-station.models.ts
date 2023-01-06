import {Position} from "../../core/models/position";

export class Station{
  number!: number;
  contract_name!: string;
  name!: string;
  address!: string;
  position!: Position[];
  banking!: boolean;
  bonus!: boolean;
  bike_stands!: number;
  available_bike_stands!: number;
  available_bikes!: number;
  status!: string;
  last_update!: number;
}

