export const favouriteLanguage = p => {
  let result = undefined;
  p.languages.forEach(l => {
    if (result === undefined || result[1] < l[1]) {
      result = l[0];
    }
  });
  return result;
};
