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

const remi: Person = {
  name: "Rémi",
  role: Role.Developer,
  rankedLanguages: [
    {language: elm, rank: 1},
    {language: java, rank: 3},
    {language: haskell, rank: 2}
  ]
};
const julien: Person = {
  name: "Julien",
  role: Role.Developer,
  rankedLanguages: [
    {language: haskell, rank: 1},
    {language: java, rank: 2}
  ]
};
const sok: Person = {
  name: "Sok",
  role: Role.ProductOwner
};

describe('TYPESCRIPT', () => {

  describe('Nominal cases', () => {
    it('should return Elm when passing remi with Front', () => {
      expect(firstRankedLanguageForCategory(LanguageCategory.Front, remi)).toStrictEqual({language: elm, rank: 1});
    });

    it('should return Haskell when passing remi with Back', () => {
      expect(firstRankedLanguageForCategory(LanguageCategory.Back, remi)).toStrictEqual({language: haskell, rank: 2});
    });

    it('should return Haskell when passing julien with Back', () => {
      expect(firstRankedLanguageForCategory(LanguageCategory.Back, julien)).toStrictEqual({language: haskell, rank: 1});
    });

    it('should return undefined when passing julien with Front', () => {
      expect(firstRankedLanguageForCategory(LanguageCategory.Front, julien)).toBeUndefined();
    });

    it('should return undefined when passing sok with Front', () => {
      expect(firstRankedLanguageForCategory(LanguageCategory.Front, sok)).toBeUndefined();
    });

    it('should return undefined when passing sok with Back', () => {
      expect(firstRankedLanguageForCategory(LanguageCategory.Back, sok)).toBeUndefined();
    });
  });

  describe('Exception/Breaking cases', () => {

    it('will fail when passing null / null', () => {
      expect(firstRankedLanguageForCategory(null, null)).toBeUndefined();
    });

    it('will fail when passing a malformed person', () => {
      expect(firstRankedLanguageForCategory(undefined, {login: "rdelga05"})).toBeUndefined();
    });

    it('will fail when passing a user without any role neither rankedLanguages', () => {
      const unknownUser = {
        name: "Unknown user"
      };
      expect(firstRankedLanguageForCategory(LanguageCategory.Front, unknownUser)).toBeUndefined();
    });

  });

  describe('Special case (same behaviour but different meanings)', () => {
    it('will pass even when providing a valid person with invalid language category', () => {
      expect(firstRankedLanguageForCategory({"name": "Front"}, remi)).toBeUndefined();
    });
  });
});
