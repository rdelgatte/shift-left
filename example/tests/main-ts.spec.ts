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
  describe('Nominal cases', () => {
    it('should return Elm when passing Rémi', () => {
      const remi: Person = {
        name: "Rémi",
        role: Role.Developer,
        rankedLanguages: [
          {language: elm, rank: 1},
          {language: haskell, rank: 1},
          {language: java, rank: 2}
        ]
      };
      expect(firstRankedLanguageForCategory(LanguageCategory.Front, remi)).toStrictEqual({language: elm, rank: 1});
    });

    it('should return Haskell when passing Julien', () => {
      const julien: Person = {
        name: "Julien",
        role: Role.Developer,
        rankedLanguages: [
          {language: haskell, rank: 1},
          {language: java, rank: 3}
        ]
      };
      expect(firstRankedLanguageForCategory(LanguageCategory.Back, julien)).toStrictEqual({language: haskell, rank: 1});
    });

    it('should return undefined when passing Sok (with empty rankedLanguages)', () => {
      const sok: Person = {
        name: "Sok",
        role: Role.ProductOwner
      };
      expect(firstRankedLanguageForCategory(LanguageCategory.Front, sok)).toBeUndefined();
    });
  });

  describe('Error cases', () => {
    it('should return undefined when passing another user without role and rankedLanguages', () => {
      const unknownUser: Person = {
        name: "Unknown user"
      };
      expect(firstRankedLanguageForCategory(LanguageCategory.Front, unknownUser)).toBeUndefined();
    });
  });
});
