export const firstRankedLanguageForCategory = (languageType, person) => {
  if (person != null && person.rankedLanguages !== undefined) {
    return person.rankedLanguages
      .filter(rankedLanguage => rankedLanguage.language.category === languageType)
      .sort((first, second) => (first.rank < second.rank) ? 1 : -1)
      .pop();
  }
};
