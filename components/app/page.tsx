"use client";

import { PageQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function PageComponent(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  const { data } = useTina(props);

  const title = data.page.title;

  const content = data.page.body;

  return (
    <article>
      <h1 data-tina-field={tinaField(data.page, "title")} className="font-bold">
        {title}
      </h1>
      <section data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </section>
    </article>
  );
}
