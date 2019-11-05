import {firstLanguageForCategory} from "../src/main.js";

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
  languages: [elm, haskell, java]
};

const julien = {
  name: "Julien",
  role: "Developer",
  languages: [haskell, java]
};

const sok = {
  name: "Sok",
  role: "ProductOwner"
};

describe('JAVASCRIPT', () => {

  describe('Nominal cases', () => {
    it('should return Elm when passing remi with Front', () => {
      expect(firstLanguageForCategory("Front", remi)).toEqual(elm);
    });

    it('should return Haskell when passing remi with Back', () => {
      expect(firstLanguageForCategory("Back", remi)).toEqual(haskell);
    });

    it('should return Haskell when passing julien with Back', () => {
      expect(firstLanguageForCategory("Back", julien)).toEqual(haskell);
    });

    it('should return undefined when passing julien with Front', () => {
      expect(firstLanguageForCategory("Front", julien)).toBeUndefined();
    });

    it('should return undefined when passing sok with Front', () => {
      expect(firstLanguageForCategory("Front", sok)).toBeUndefined();
    });

    it('should return undefined when passing sok with Back', () => {
      expect(firstLanguageForCategory("Back", sok)).toBeUndefined();
    });
  });

  xdescribe('Exception/Breaking cases', () => {
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
      expect(firstLanguageForCategory("Front", unknownUser)).toBeUndefined();
    });

  });

  xdescribe('Special case (same behaviour but different meanings)', () => {
    it('will pass even when providing a valid person with invalid language category', () => {
      expect(firstLanguageForCategory({"name": "Front"}, remi)).toBeUndefined();
    });
  });
});
