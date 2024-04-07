"use client";

import { BlogQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function BlogPageComponent(props: {
  data: BlogQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  const { data } = useTina(props);

  const title = data.blog.title;

  const content = data.blog.body;

  return (
    <article>
      <h1 data-tina-field={tinaField(data.blog, "title")}>{title}</h1>
      <section data-tina-field={tinaField(data.blog, "body")}>
        <TinaMarkdown content={content} />
      </section>
    </article>
  );
}
