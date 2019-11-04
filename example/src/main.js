export const firstRankedLanguageForCategory = (person, category) => {
  if (person.role === "Developer" && person.rankedLanguages !== undefined) {
    return person.rankedLanguages
      .filter(rankedLanguage => rankedLanguage.language.category === category)
      .sort((first, second) => (first.rank < second.rank) ? 1 : -1)
      .pop();
  }
};
