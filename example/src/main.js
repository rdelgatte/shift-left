export const firstLanguageByType = (developer, type) => {
  let result = [];
  developer.languages.forEach(l => {
    if (l.type === type) {
      result.push(l);
    }
  });
  return result[0];
};
