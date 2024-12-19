const selectionKeys = [
  "variants",
  "ishiharaVariants",
  "pdVariants",
];

export const hasRequiredSelections = (product) => {
  return selectionKeys.some(
    (key) => Array.isArray(product[key]) && product[key].length > 0
  );
};
