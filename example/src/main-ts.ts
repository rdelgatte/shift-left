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

export const firstLanguageForCategory = (category, person) => {
  return person.languages
    .filter(language => language.category === category)
    .shift();
};
