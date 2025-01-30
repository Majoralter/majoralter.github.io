---
title: "Notes on this site"
pubDate: 2024-12-23
tags: ["frontend", "mdx", "vue", "notes"]
draft: false
---

>UPDATE: Before I invest too much content into this site, I think the wise thing to do is rewrite it in Astro or Nuxt (I'm not sure which I'll go for, considering I have to learn both). 


# Backstory

Building a personal site was top on the list of my goals at the turn of the year. I'm already three years into web development and just seeing this through now is a little disappointing, but at least it's done right?

## Previous attempts

It's not like I haven't tried to build a personal site before, but [that attempt](https://major-dev-ebon.vercel.app/) felt empty and lazy (the entire site was a vanilla javascript function) and I always knew it wasn't going to cut it going forward.

## VitePress

The first half of this year went by and I was only working on a few personal projects (nothing fancy) and I had already forgotten my goal of building a personal site (as one does duh), until I discovered VitePress (a static site generator) in July. And while it has its uses, I had to give it up because of it quirks:

- It felt like it was created for developers to have a documentation site up and running quickly and not for personal sites (although it could be added on top of a Vue app).
- Even with a lot of customization, it was still didn't feel personal enough for me.
- The codebase felt too bulky for a simple site.

# This site

After the little sidequest with VitePress I got a little busy and abandoned the goal again. This month though, after some introspection, I jotted some of my personal goals for 2025 and having a personal site would play a key role because I need a place (separate from social media) to document everything I have planned.

## The content

The first thing I considered was what exactly was going to be on the site:

### A bio

Just a quick introduction about me and my interests. I don't think I need a separate page for this even now as I write this, so this can be found on the Index (home) page.

### A blog

This was the reason I considered VitePress in the first place. I took a different approach this time though (I will talk about this later in this post).

### A collection of personal stuff

This part was heavily inspired by [notgr](https://degreat.co.uk/) and can be found on the lists page.

## The stack

I went with the stack I've used pretty much this entire year:

- VueJs on the frontend.
- SCSS for styling, the best decision regarding adding theming to this site.
- MDX for markdown content (I had never configured this from scratch before and I struggled a lot to get it working).
- Github pages for hosting, that's how I got a domain that at least looks presentable.

And that's it!

## Style, look and feel
I really love how [Ayodeji's site](https://trulyao.dev/) is designed and laid out, so that was a big inspiration for the design of this site. I will probably revamp the styling soon though (I just needed a base).

## Timeline
The development of this site was completed in a week. Trying to configure MDX for Vue extended this timeline. 

# Code
Some interesting parts of the codebase.

## Theming Logic
The entire theming system is controlled by this SCSS mixin:
```scss
@mixin themify($themes) {
  @each $name, $values in $themes {
    .#{$name} {
      $theme-map: $values !global;
      @content;
    }
  }
}
```
The logic is explained in detail [here](https://david-x.medium.com/light-mode-dark-mode-dynamic-theming-through-scss-mixin-c86e57a4de49).

## Getting blog posts
MDX is great when the use of components in markdown is essential, but it compiles to JSX, albeit configured for Vue in my case: 

```javascript
config.module
        .rule("mdx")
        .test(/\.mdx?$/)
        .use("@mdx-js/loader")
        .loader("@mdx-js/loader")
        .options({
          jsxImportSource: "vue",
        })
        .end();
```        
Now, what exactly is the problem with this? Well, I needed to parse the front-matter for each MDX file and I used **gray-matter** for this.&nbsp;

But **gray-matter** expects a string or raw file as input and not a component, so passing the compiled MDX files to **gray-matter** as input caused issues, issues that caused me headaches.&nbsp;

After digging though I discovered **raw-loader**, a loader for webpack that allows importing or reading of files as a String. Since I already defined the loader for MDX files as **@mdx-js/loader** in my **vue config**, I had to disable that loader when importing the MDX files with this flag **!!raw-loader!** and so the issue was solved.

This is the full composable for fetching the blog posts:
```typescript
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
```
The rest of codebase isn't that interesting (at least in my opinion) and you can go through it [here](https://github.com/Majoralter/majoralter.github.io).

# Conclusion
I plan to add more stuff to the site soon (comments on blog posts for example), but this will do for now. Thank you for reading and have a nice day!