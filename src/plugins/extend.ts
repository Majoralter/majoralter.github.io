import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

export async function processMdx(content: string | undefined): Promise<string> {
  if (content === undefined) {
    return "";
  } else {
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content);

    return processedContent.toString();
  }
}
