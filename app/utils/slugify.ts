export function getSlug(text: string) {
  return text.toLocaleLowerCase().replaceAll(" ", "-");
}
