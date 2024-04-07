"use client";

import { BlogConnectionQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";

export function BlogListPageComponent(props: {
  data: BlogConnectionQuery;
  variables: {};
  query: string;
}) {
  const { data } = useTina(props);

  const blogList = data.blogConnection.edges;

  return (
    <>
      <h1>Blog Posts</h1>
      <div>
        {blogList?.map((blog: any) => (
          <div key={blog.node.id}>
            <Link href={`/blogs/${blog.node._sys.filename}`}>
              {blog.node.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
