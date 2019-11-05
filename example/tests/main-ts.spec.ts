import {firstLanguageForCategory, Language, LanguageCategory, Person, Role} from "../src/main-ts";

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
  languages: [elm, haskell, java]
};

const julien: Person = {
  name: "Julien",
  role: Role.Developer,
  languages: [haskell, java]
};

const sok: Person = {
  name: "Sok",
  role: Role.ProductOwner
};

describe('TYPESCRIPT', () => {

  describe('Nominal cases', () => {
    it('should return Elm when passing remi with Front', () => {
      expect(firstLanguageForCategory(LanguageCategory.Front, remi)).toEqual(elm);
    });

    it('should return Haskell when passing remi with Back', () => {
      expect(firstLanguageForCategory(LanguageCategory.Back, remi)).toEqual(haskell);
    });

    it('should return Haskell when passing julien with Back', () => {
      expect(firstLanguageForCategory(LanguageCategory.Back, julien)).toEqual(haskell);
    });

    it('should return undefined when passing julien with Front', () => {
      expect(firstLanguageForCategory(LanguageCategory.Front, julien)).toBeUndefined();
    });

    it('should return undefined when passing sok with Front', () => {
      expect(firstLanguageForCategory(LanguageCategory.Front, sok)).toBeUndefined();
    });

    it('should return undefined when passing sok with Back', () => {
      expect(firstLanguageForCategory(LanguageCategory.Back, sok)).toBeUndefined();
    });
  });

  describe('Exception/Breaking cases', () => {

    it('will fail when passing null / null', () => {
      expect(firstLanguageForCategory(null, null)).toBeUndefined();
    });

    it('will fail when passing a malformed person', () => {
      expect(firstLanguageForCategory(undefined, {login: "rdelga05"})).toBeUndefined();
    });

    it('will fail when passing a user without any role neither languages', () => {
      const unknownUser = {
        name: "Unknown user"
      };
      expect(firstLanguageForCategory(LanguageCategory.Front, unknownUser)).toBeUndefined();
    });

  });

  describe('Special case (same behaviour but different meanings)', () => {
    it('will pass even when providing a valid person with invalid language category', () => {
      expect(firstLanguageForCategory({"name": "Front"}, remi)).toBeUndefined();
    });
  });
});
