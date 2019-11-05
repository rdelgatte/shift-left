export const firstLanguageForCategory = (languageType, person) => {
  return person.languages
    .filter(language => language.category === languageType)
    .shift();
};
