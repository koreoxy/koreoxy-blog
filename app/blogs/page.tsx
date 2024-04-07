import { BlogListPageComponent } from "@/components/app/blogs/blog-list-page";
import client from "@/tina/__generated__/client";

export default async function BloListPage() {
  const result = await client.queries.blogConnection();

  return <BlogListPageComponent {...result} />;
}
