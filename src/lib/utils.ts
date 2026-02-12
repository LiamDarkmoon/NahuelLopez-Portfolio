export function getLangParams() {
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);
  const lang = parts[0];

  return lang;
}
