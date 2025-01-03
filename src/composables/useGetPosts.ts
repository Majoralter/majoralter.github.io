import matter from "gray-matter";
import { getHeadingsFromContent } from "@/utils/getHeadings";

export type Post = {
  slug: string;
  title: string;
  date: string;
  updatedAt: string;
  desc: string;
  content: string;
  tags: string[];
  headings: { depth: number; text: string }[];
};

export function getPosts(): Post[] {
  const context = require.context(
    "!!raw-loader!@/content/posts",
    false,
    /\.mdx$/
  );

  const posts: Post[] = [];

  context.keys().forEach(async (key) => {
    const content = context(key).default;
    const headings = getHeadingsFromContent(content);
    const { data, content: rawContent } = matter(content);

    posts.push({
      slug: key.replace("./", "").replace(".mdx", ""),
      title: data.title || "Untitled",
      date: data.date || "",
      updatedAt: data.updatedAt || "",
      desc: data.desc || "",
      content: rawContent,
      tags: data.tags || [],
      headings,
    });
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
