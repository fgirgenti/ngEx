import { Gender, Role, User } from "TypescriptEx/ex1/ex1";

class Person implements User {
    id!: number;
    name!: string;
    surname!: string;
    age!: number;
    dateOfBirth!: string;
    address!: { city: string; street: string; postalCode: string; };
    role!: Role;
    username!: string;
    profilePhotoUrl!: string;
    companies!: [
        {
            id: number;
            name: string;
            description: string;
            location: { city: string; street: string; postalCode: string; };
        },
        {
            id: number;
            name: string;
            description: string;
            location: { city: string; street: string; postalCode: string; };
        }
    ];
    gender!: Gender;
    get fullname(): string {
      return `${this.name} ${this.surname}`;
    }
  }