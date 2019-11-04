export enum LanguageCategory {
  Front,
  Back
}

export enum Role {
  Developer,
  ProductOwner,
  ScrumMaster
}

export class Language {
  name!: string;
  category!: LanguageCategory;
}

export class RankedLanguage {
  language!: Language;
  rank!: number;
}

export class Person {
  name!: string;
  role!: Role;
  rankedLanguages?: RankedLanguage[];
}

export const firstRankedLanguageForCategory = (person: Person, category: LanguageCategory): RankedLanguage | undefined => {
  return person.rankedLanguages === undefined || person.role !== Role.Developer ? undefined : person.rankedLanguages
    .filter(rankedLanguage => rankedLanguage.language.category === category)
    .sort((a, b) => (a.rank < b.rank) ? 1 : -1)
    .pop();
};