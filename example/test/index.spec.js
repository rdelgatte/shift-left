import {favouriteLanguage} from "../src";
import {expect} from "chai";

describe('Favourite language', () => {
  it('should return Elm when passing remi', () => {
    const remi = {
      name: "Rémi Delgatte",
      languages: [["Elm", 5], ["Haskell", 4], ["Java", 3]]
    };
    expect(favouriteLanguage(remi)).to.equal("Elm");
  });
  it('should return Haskell when passing julien', () => {
    const julien = {
      name: "Julien Debon",
      languages: [["Haskell", 5], ["Java", 3]]
    };
    expect(favouriteLanguage(julien)).to.equal("Haskell");
  });
  it('will throw an exception when passing sok', () => {
    const sok = {
      name: "Sok Bun",
      languages: []
    };
    expect(favouriteLanguage(sok)).to.equal("");
  });
  it('will throw an exception when passing sok', () => {
    const unknownUser = {
      name: "Unknown user"
    };
    expect(favouriteLanguage(unknownUser)).to.equal(undefined);
  });
});
