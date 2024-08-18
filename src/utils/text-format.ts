export const toCapital = (text?: string) =>
  text ? text[0].toUpperCase() + text.slice(1).toLowerCase() : "";
