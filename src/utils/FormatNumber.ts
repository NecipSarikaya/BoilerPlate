export const FormatNumber = (
  value: number,
  lang = 'tr',
  fraction = 4
): string => {
  return new Intl.NumberFormat(lang, {
    maximumFractionDigits: fraction,
  }).format(value);
};
