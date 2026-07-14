// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Post } from '@/app/data/post';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    notFound();
  }

  const post: Post = await res.json();

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
      <p className="text-sm text-gray-500 mt-6">Posted by user #{post.userId}</p>
    </div>
  );
};

export default page;