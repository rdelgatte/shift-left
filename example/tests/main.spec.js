import {firstRankedLanguageForCategory} from "../src/main.js";

const elm = {
  name: "Elm",
  category: "Front"
};

const haskell = {
  name: "Haskell",
  category: "Back"
};

const java = {
  name: "Java",
  category: "Back"
};

const remi = {
  name: "Rémi",
  role: "Developer",
  rankedLanguages: [
    {language: elm, rank: 1},
    {language: java, rank: 3},
    {language: haskell, rank: 2},
  ]
};

const julien = {
  name: "Julien",
  role: "Developer",
  rankedLanguages: [
    {language: haskell, rank: 1},
    {language: java, rank: 2}
  ]
};

const sok = {
  name: "Sok",
  role: "ProductOwner"
};

describe('JAVASCRIPT', () => {

  describe('Nominal cases', () => {
    it('should return Elm when passing remi with Front', () => {
      expect(firstRankedLanguageForCategory("Front", remi)).toStrictEqual({language: elm, rank: 1});
    });

    it('should return Haskell when passing remi with Back', () => {
      expect(firstRankedLanguageForCategory("Back", remi)).toStrictEqual({language: haskell, rank: 2});
    });

    it('should return Haskell when passing julien with Back', () => {
      expect(firstRankedLanguageForCategory("Back", julien)).toStrictEqual({language: haskell, rank: 1});
    });

    it('should return undefined when passing julien with Front', () => {
      expect(firstRankedLanguageForCategory("Front", julien)).toBeUndefined();
    });
  });

  describe('Error cases', () => {
    it('should return undefined when passing sok with Front', () => {
      expect(firstRankedLanguageForCategory("Front", sok)).toBeUndefined();
    });

    it('should return undefined when passing sok with Back', () => {
      expect(firstRankedLanguageForCategory("Back", sok)).toBeUndefined();
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
      expect(firstRankedLanguageForCategory("Front", unknownUser)).toBeUndefined();
    });

  });

  describe('Special case (same behaviour but different meanings)', () => {
    it('will pass even when providing a valid person with invalid language category', () => {
      expect(firstRankedLanguageForCategory({"name": "Front"}, remi)).toBeUndefined();
    });
  });
});
