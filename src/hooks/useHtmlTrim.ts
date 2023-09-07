export function useHtmlTrim(content: string, trimLength = 150) {
  // Sanitize HTML content
  const textContent = content.replace(/<[^>]+>/g, ' ').trim();

  // Trim the content to the specified length
  const trimmedContent = textContent.slice(0, trimLength).concat('...');

  return trimmedContent;
}
