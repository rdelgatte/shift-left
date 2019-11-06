export enum LanguageCategory {
  Front = "Front",
  Back = "Back"
}

export enum Role {
  Developer,
  ProductOwner
}

export class Language {
  name!: string;
  category!: LanguageCategory;
}

export class Person {
  name!: string;
  role!: Role;
  languages?: Language[];
}
