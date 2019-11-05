export const firstLanguageForCategory = (languageType, person) => {
  if (person != null && person.languages !== undefined) {
    return person.languages
      .filter(language => language.category === languageType)
      .shift();
  }
};
