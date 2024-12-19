export const areSelectionsComplete = (product, userSelections) => {
  const selectionKeys = ["variants", "ishiharaVariants", "pdVariants"];
  
  // Check if each key exists and is properly selected
  for (let key of selectionKeys) {
    if (Array.isArray(product[key]) && product[key].length > 0) {
      const userSelection = userSelections?.[key];
      if (!userSelection) {
        return false; // Required selection is missing
      }
    }
  }
  return true; // All required selections are made
};
