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

describe('JAVASCRIPT', () => {
  it('should return Elm when passing remi', () => {
    const remi = {
      name: "Rémi",
      role: "Developer",
      rankedLanguages: [
        {language: elm, rank: 1},
        {language: haskell, rank: 2},
        {language: java, rank: 3}
      ]
    };
    expect(firstRankedLanguageForCategory(remi, "Front")).toStrictEqual({language: elm, rank: 1});
  });
  it('should return Haskell when passing julien', () => {
    const julien = {
      name: "Julien",
      role: "Developer",
      rankedLanguages: [
        {language: haskell, rank: 1},
        {language: java, rank: 3}
      ]
    };
    expect(firstRankedLanguageForCategory(julien, "Back")).toStrictEqual({language: haskell, rank: 1});
  });
  it('should return undefined when passing sok', () => {
    const sok = {
      name: "Sok",
      role: "ProductOwner"
    };
    expect(firstRankedLanguageForCategory(sok, "Front")).toBeUndefined();
  });
  it('will fail when passing a user without any role neither rankedLanguages', () => {
    const unknownUser = {
      name: "Unknown user"
    };
    expect(firstRankedLanguageForCategory(unknownUser, "Front")).toBeUndefined();
  });
});
