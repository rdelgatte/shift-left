import {firstRankedLanguageForCategory, Language, LanguageCategory, Person, Role} from "../src/main-ts";

const elm: Language = {
  name: "Elm",
  category: LanguageCategory.Front
};

const haskell: Language = {
  name: "Haskell",
  category: LanguageCategory.Back
};

const java: Language = {
  name: "Java",
  category: LanguageCategory.Back
};

describe('TYPESCRIPT', () => {
  it('should return Elm when passing remi', () => {
    const remi: Person = {
      name: "Rémi",
      role: Role.Developer,
      rankedLanguages: [
        {language: elm, rank: 1},
        {language: haskell, rank: 2},
        {language: java, rank: 3}
      ]
    };
    expect(firstRankedLanguageForCategory(remi, LanguageCategory.Front)).toStrictEqual({language: elm, rank: 1});
  });
  it('should return Haskell when passing julien', () => {
    const julien = {
      name: "Julien",
      role: Role.Developer,
      rankedLanguages: [
        {language: haskell, rank: 1},
        {language: java, rank: 3}
      ]
    };
    expect(firstRankedLanguageForCategory(julien, LanguageCategory.Back)).toStrictEqual({language: haskell, rank: 1});
  });
  it('should return undefined when passing sok (with empty rankedLanguages)', () => {
    const sok = {
      name: "Sok",
      role: Role.ProductOwner
    };
    expect(firstRankedLanguageForCategory(sok, LanguageCategory.Front)).toBeUndefined();
  });
  it('should return undefined when passing an user without role and rankedLanguages', () => {
    const unknownUser = {
      name: "Unknown user"
    };
    expect(firstRankedLanguageForCategory(unknownUser, LanguageCategory.Front)).toBe(undefined);
  });
});
