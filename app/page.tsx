import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { type Post, allPosts } from 'contentlayer/generated';

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div>
      {posts.map((post: Post) => (
        <article key={post._id}>
          <Link href={post.url} className='text-blue-700'>
            {post.title}
          </Link>
        </article>
      ))}
    </div>
  );
}
