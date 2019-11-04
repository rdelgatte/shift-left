import {firstLanguageByType, Language, LanguageType, Person} from "../src/main-ts";

const elm: Language = {
  name: "Elm",
  type: LanguageType.Front
};

const haskell: Language = {
  name: "Haskell",
  type: LanguageType.Back
};

const java: Language = {
  name: "Java",
  type: LanguageType.Back
};

describe('TYPESCRIPT', () => {
  it('should return Elm when passing remi', () => {
    const remi: Person = {
      name: "Rémi Delgatte",
      languages: [elm, haskell, java]
    };
    expect(firstLanguageByType(remi, LanguageType.Front)).toBe(elm);
  });
  it('should return Haskell when passing julien', () => {
    const julien = {
      name: "Julien Debon",
      languages: [haskell, java]
    };
    expect(firstLanguageByType(julien, LanguageType.Back)).toBe(haskell);
  });
  it('will throw an exception when passing sok (with empty languages)', () => {
    const sok = {
      name: "Sok Bun",
      languages: []
    };
    expect(firstLanguageByType(sok, LanguageType.Front)).toBeUndefined();
  });
  // it('will throw an exception when passing unknown user (without languages)', () => {
  //   const unknownUser = {
  //     name: "Unknown user"
  //   };
  //   expect(firstLanguageByType(unknownUser, LanguageType.Front)).toBe(undefined);
  // });
});
