export const firstLanguageForCategory = (category, person) => {
  if (person !== null && person !== undefined && person.languages !== undefined) {
    return person.languages
      .filter(language => language.category === category)
      .shift();
  }
};
