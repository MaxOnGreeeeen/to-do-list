export const getShorterDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.substr(maxLength) + " . . .";
  }
  if (description.length <= maxLength) {
    return description;
  }
};
