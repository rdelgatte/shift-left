import {firstLanguageByType} from "../src/main.js";

const elm = {
  name: "Elm",
  type: "Front"
};

const haskell = {
  name: "Haskell",
  type: "Back"
};

const java = {
  name: "Java",
  type: "Back"
};

describe('JAVASCRIPT', () => {
  it('should return Elm when passing remi', () => {
    const remi = {
      name: "Rémi Delgatte",
      languages: [elm, haskell, java]
    };
    expect(firstLanguageByType(remi, "Front")).toEqual(elm);
  });
  it('should return Haskell when passing julien', () => {
    const julien = {
      name: "Julien Debon",
      languages: [haskell, java]
    };
    expect(firstLanguageByType(julien, "Back")).toEqual(haskell);
  });
  it('will throw an exception when passing sok', () => {
    const sok = {
      name: "Sok Bun",
      languages: []
    };
    expect(firstLanguageByType(sok, "Front")).toEqual("");
  });
  it('will throw an exception when passing sok', () => {
    const unknownUser = {
      name: "Unknown user"
    };
    expect(firstLanguageByType(unknownUser, "Front")).toEqual(undefined);
  });
});
