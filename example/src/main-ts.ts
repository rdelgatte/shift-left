export enum LanguageType {
  Front,
  Back
}

export class Language {
  name: string = "";
  type: LanguageType = LanguageType.Front;
}

export class Person {
  name: string = "";
  languages: Language[] = [];
}

export const firstLanguageByType = (developer: Person, type: LanguageType): Language => {
  let result: Language[] = [];
  developer.languages.forEach(language => {
    if (language.type === type) {
      result.push(language);
    }
  });
  return result[0];
};
