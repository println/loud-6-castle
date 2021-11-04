import { Person } from '@modules/domain/star-wars/submodules/swapi/models/person.model';

export class PersonFormData implements Person {
  birth_year!: string;
  created!: string;
  edited!: string;
  eye_color!: string;
  films!: string[];
  gender!: string;
  hair_color!: string;
  height!: string;
  homeworld!: string;
  id!: number;
  mass!: string;
  name!: string;
  skin_color!: string;
  species!: string[];
  starships!: string[];
  url!: string;
  vehicles!: string[];
  constructor(person: Person) {
    Object.assign(this, person);
  }
}
