import fs from 'fs';

import path, { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

type PostItems = {
  [key: string]: string;
};

export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));


  export async function getPost(slug: string) {

    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postFilePath);
  
    const { content, data } = matter(source);
    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      //   mdxOptions: {
      //     remarkPlugins: [require('remark-code-titles')],
      //     rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
      //   },
      scope: data
    });
    return {
        source: mdxSource,
        frontMatter: data
    };
  }

export function getPostBySlug(slug: string, fields: string[] = []): PostItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], type: string = 'work'): PostItems[] {
  const slugs = fs.readdirSync(POSTS_PATH);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .filter((post) => post.type === type).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

//Finding directory named "posts" from the current working directory of Node.
const pagesDirectory = path.join(process.cwd(), 'posts');

// remove
export const getSortedPosts = () => {
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(pagesDirectory);

  const allPostsData = fileNames.map((filename) => {
    const slug = filename.replace('.mdx', '');

    const fullPath = path.join(pagesDirectory, filename);
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = new Date(data.date).toLocaleDateString(
      'en-IN',
      options
    );

    const frontmatter = {
      ...data,
      date: formattedDate
    };
    return {
      slug,
      ...frontmatter
    };
  });
  

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};