export async function fetchMarkdown(filePath) {
  const response = await fetch(filePath);
  const text = await response.text();
  return text;
}