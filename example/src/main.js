export const firstLanguageForCategory = (category, person) => {
  return person.languages
    .filter(language => language.category === category)
    .shift();
};
