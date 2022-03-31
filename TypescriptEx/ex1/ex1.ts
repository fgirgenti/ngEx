export enum Role {
    STAFF = 'staff',
    STUDENT = 'student',
    MANAGER = 'manager',
    ADMIN = 'admin',
  }
  
  export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
  }
  
  export interface User {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: {
      city: string;
      street: string;
      postalCode: string;
    };
    role: Role;
    username: string;
    profilePhotoUrl: string;
    gender: Gender;
  }