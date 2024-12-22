export const getHeadingsFromContent = (
  content: string
): { depth: number; text: string }[] => {
  const headings: { depth: number; text: string }[] = [];
  const regex = /^(#{1,6})\s+(.+)$/gm;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const [_, hashes, text] = match;
    headings.push({
      depth: hashes.length,
      text: text.trim(),
    });
  }

  return headings;
};
