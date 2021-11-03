export function normalizeString(text) {
  return text
    .normalize('NFD')
    .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2')
    .normalize()
    .toUpperCase()
    .trim();
}
