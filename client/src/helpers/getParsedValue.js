export const getParsedValue = (valueKey) => {
  const values = {
    низкий: 25,
    средний: 50,
    высокий: 75,
    "очень высокий": 100,
  };
  return values[valueKey];
};
