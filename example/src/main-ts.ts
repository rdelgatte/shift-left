export enum LanguageCategory {
  Front,
  Back
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

export const firstLanguageForCategory = (category: LanguageCategory, person: Person): Language | undefined => {
  return person.languages
    .filter(language => language.category === category)
    .shift();
};
