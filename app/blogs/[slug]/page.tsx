import { BlogPageComponent } from "@/components/app/blogs/blog-page";
import client from "@/tina/__generated__/client";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const result = await client.queries
    .blog({
      relativePath: `${params.slug}.mdx`,
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
      return notFound();
    });

  return <BlogPageComponent {...result} />;
}
