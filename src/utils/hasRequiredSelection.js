const selectionKeys = ["variants", "ishiharaVariants", "pdVariants", "options"];

export const hasRequiredSelections = (product) => {
  const hasSelection = selectionKeys.some(
    (key) => Array.isArray(product[key]) && product[key].length > 0
  );
  const isSpecialOrder = product.specialOrder;
  return hasSelection || isSpecialOrder;
};
