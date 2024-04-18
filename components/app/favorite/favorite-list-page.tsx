"use client";

import { LinkCard } from "@/components/LinkCard";
import { FavoriteConnectionQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export default function FavoriteListPageComponent(props: {
  data: FavoriteConnectionQuery;
  variables: {};
  query: string;
}) {
  const { data } = useTina(props);

  const favoriteList = data.favoriteConnection.edges;
  return (
    <>
      <h1>My Favorite</h1>
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
        <div className="grid grid-cols-1 gap-4">
          {favoriteList
            ?.filter((_: any, i: number) => i % 3 === 0)
            .map((project: any) => (
              <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
              />
            ))}
        </div>
      </div>
    </>
  );
}
